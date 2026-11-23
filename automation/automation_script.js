const fs = require("fs");
const path = require("path");
const readline = require("readline");



/* ======================================================
   CONFIG – API PROFILES
====================================================== */

const API_PROFILES = [
  {
    name: "User",
    newJson: ".gitbook/assets/User_API_Doc.json",
    oldJson: "old-user.json",
    docsRoot: "resources/user-api-documentation",
    summaryAnchor:
      "* [User API documentation](resources/user-api-documentation/README.md)",
    openapiSrc: "../../../.gitbook/assets/User_API_Doc.json",
  },
  {
    name: "Admin",
    newJson: ".gitbook/assets/Admin_API_Doc.json",
    oldJson: "old-admin.json",
    docsRoot: "resources/admin-api-documentation",
    summaryAnchor:
      "* [Admin API documentation](resources/admin-api-documentation/README.md)",
    openapiSrc: "../../../.gitbook/assets/Admin_API_Doc.json",
  },
];

const ROOT_DIR = process.cwd();
const SUMMARY_PATH = path.join(ROOT_DIR, "SUMMARY.md");



/* ======================================================
   SWAGGER FETCH & VALIDATION
====================================================== */

async function promptSwaggerUrls(apiProfiles) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q) =>
    new Promise((resolve) => rl.question(q, resolve));

    // --------------------------------------------------
    // Step 0: Prepare baseline oldJson from existing newJson
    // --------------------------------------------------
    for (const profile of apiProfiles) {
        // Ensure oldJson exists
        if (!fs.existsSync(profile.oldJson)) {
            fs.writeFileSync(profile.oldJson, "{}");
        }

        // If newJson exists, copy it to oldJson
        if (fs.existsSync(profile.newJson)) {
            fs.copyFileSync(profile.newJson, profile.oldJson);
            console.log(
                ` Baseline prepared: ${profile.newJson} → ${profile.oldJson}`
            );
        } else {
            // Ensure newJson exists for first run
            fs.writeFileSync(profile.newJson, "{}");
            fs.copyFileSync(profile.newJson, profile.oldJson);
            console.log(
                ` Baseline initialized (empty): ${profile.oldJson}`
            );
        }
    }


  for (const profile of apiProfiles) {

    let rawUrl = getSwaggerUrl(profile.name);

    if (!rawUrl) {
      rawUrl = await ask(
        ` Enter Swagger JSON URL for ${profile.name} API:\n> `
      );
    } else {
      console.log(
        ` Using Swagger URL for ${profile.name} API from environment variable`
      );
    }
    const url = normalizeSwaggerUrl(rawUrl);

    try {
      console.log(` Fetching Swagger for ${profile.name} API...`);
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();

      if (!json.paths || typeof json.paths !== "object") {
        throw new Error("Invalid Swagger format (missing paths)");
      }

      fs.writeFileSync(profile.newJson, JSON.stringify(json, null, 2));
      console.log(
        ` Swagger JSON saved to ${profile.newJson}`
      );
    } catch (err) {
      console.error(
        ` Swagger path is invalid for ${profile.name} API. Please check.\nReason: ${err.message}`
      );
      rl.close();
      process.exit(1);
    }
  }

  rl.close();
}



/* ======================================================
   HELPERS
====================================================== */

const ensureDir = (d) => fs.mkdirSync(d, { recursive: true });
const normalizeKey = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]/g, "");
const titleCase = (s) =>
  s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const fileNameFor = (method, p) =>
  `${method}-${p.replace(/[\/{}]/g, "-").replace(/-+/g, "-")}.md`;

const extractKeyFromMd = (content) => {
  const p = content.match(/path="([^"]+)"/);
  const m = content.match(/method="([^"]+)"/);
  if (!p || !m) return null;
  return `${m[1]} ${p[1]}`;
};


function getSwaggerUrl(profileName) {
  return process.env[`SWAGGER_URL_${profileName.toUpperCase()}`];
}

//========function for normalising the url============
function normalizeSwaggerUrl(inputUrl) {
  if (!inputUrl) return inputUrl;

  // Remove trailing slash
  let url = inputUrl.replace(/\/$/, "");

  // If swagger UI URL is provided, convert it
  if (url.endsWith("/swagger/index.html")) {
    url = url.replace("/swagger/index.html", "/swagger/v1/swagger.json");
  }

  return url;
}



/* ======================================================
   SWAGGER LOADER
====================================================== */

function loadSwagger(file) {
  if (!fs.existsSync(file)) return {};
  const spec = JSON.parse(fs.readFileSync(file, "utf8"));
  const map = {};

  for (const [p, methods] of Object.entries(spec.paths || {})) {
    for (const [m, op] of Object.entries(methods)) {
      map[`${m} ${p}`] = {
        method: m,
        path: p,
        summary: op.summary || "Unnamed endpoint",
        tag:
          Array.isArray(op.tags) && op.tags.length
            ? op.tags[0]
            : "general",
        raw: op,
      };
    }
  }
  return map;
}

/* ======================================================
   README.md BUILDER
====================================================== */

function buildReadmeContent(tag, ops) {
  const summaries = Object.values(ops)
    .filter((o) => normalizeKey(o.tag) === normalizeKey(tag))
    .map((o) => o.summary)
    .sort();

  return (
    [`# ${titleCase(tag)} APIs`, "", ...summaries.map((s) => `- ${s}`)].join(
      "\n"
    ) + "\n"
  );
}


function syncRootReadme(docsRoot, apiName) {
  const readmePath = path.join(docsRoot, "README.md");
  if (!fs.existsSync(readmePath)) {
    console.log(` README.md not found for ${apiName}, skipping`);
    return;
  }

  const content = fs.readFileSync(readmePath, "utf8");
  const lines = content.split("\n");

  const tableStart = lines.findIndex(l =>
    l.trim().startsWith("| Operation group")
  );
  if (tableStart === -1) {
    console.log(` No operation table found in ${readmePath}`);
    return;
  }

  const tableHeaderEnd = tableStart + 2;

  let tableEnd = tableHeaderEnd;
  while (tableEnd < lines.length && lines[tableEnd].trim().startsWith("|")) {
    tableEnd++;
  }

  const existingRows = lines.slice(tableHeaderEnd, tableEnd);

  // ---- Parse existing rows
  const existingMap = new Map();
  for (const row of existingRows) {
    const match = row.match(/\]\(\.\.\/[^/]+\/([^/]+)\//);
    if (match) {
      existingMap.set(match[1], row);
    }
  }

  // ---- Read actual folders
  const actualFolders = fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => name !== "README.md");

  const newRows = [];
  let changed = false;

  for (const folder of actualFolders) {
    if (existingMap.has(folder)) {
      newRows.push(existingMap.get(folder));
    } else {
      const displayName = folder
        .split("-")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      newRows.push(
        `| [${displayName}](../${path.basename(docsRoot)}/${folder}/) | Operations for working with ${displayName.toLowerCase()}. |`
      );
      console.log(` README: added ${displayName}`);
      changed = true;
    }
  }

  // ---- Detect removals
  for (const oldFolder of existingMap.keys()) {
    if (!actualFolders.includes(oldFolder)) {
      console.log(` README: removed ${oldFolder}`);
      changed = true;
    }
  }

  if (!changed) {
    console.log(` No README.md changes needed for ${apiName}`);
    return;
  }

  const updated = [
    ...lines.slice(0, tableHeaderEnd),
    ...newRows,
    ...lines.slice(tableEnd),
  ].join("\n");

  fs.writeFileSync(readmePath, updated);
  console.log(` Updated README.md for ${apiName}`);
}


/* ======================================================
   MAIN PROCESSOR
====================================================== */

function processApi(profile) {
  console.log(`\n Processing ${profile.name} API`);

  const DOC_ROOT = path.join(ROOT_DIR, profile.docsRoot);

  const oldOps = loadSwagger(profile.oldJson);
  const newOps = loadSwagger(profile.newJson);

  ensureDir(DOC_ROOT);

  const folderIndex = {};
  const mdIndex = {};

  // Index folders
  for (const f of fs.readdirSync(DOC_ROOT)) {
    const full = path.join(DOC_ROOT, f);
    if (fs.statSync(full).isDirectory())
      folderIndex[normalizeKey(f)] = f;
  }

  // Index MD files
  const walk = (d) => {
    for (const f of fs.readdirSync(d)) {
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (f.endsWith(".md") && f.toLowerCase() !== "readme.md") {
        const key = extractKeyFromMd(fs.readFileSync(full, "utf8"));
        if (key) mdIndex[key] = full;
      }
    }
  };
  walk(DOC_ROOT);

  // Delete removed endpoints
  for (const key in mdIndex) {
    if (!newOps[key]) {
      fs.unlinkSync(mdIndex[key]);
      console.log(`  Deleted endpoint doc: ${key}`);
    }
  }

  // Update or relocate endpoints
  for (const key in mdIndex) {
    if (!oldOps[key] || !newOps[key]) continue;

    const oldTag = normalizeKey(oldOps[key].tag);
    const newTag = normalizeKey(newOps[key].tag);

    if (oldTag !== newTag) {
      fs.unlinkSync(mdIndex[key]);
      console.log(
        ` Moved endpoint '${key}' from tag '${oldOps[key].tag}' → '${newOps[key].tag}'`
      );
      delete mdIndex[key];
      continue;
    }

    if (JSON.stringify(oldOps[key].raw) !== JSON.stringify(newOps[key].raw)) {
      const ep = newOps[key];
      fs.writeFileSync(
            mdIndex[key],
            `# ${titleCase(ep.tag)} - ${ep.summary}

{% openapi src="${profile.openapiSrc}" path="${ep.path}" method="${ep.method}" %}
[${path.basename(profile.newJson)}](${profile.openapiSrc})
{% endopenapi %}`
        );
      console.log(`  Updated endpoint doc: ${key}`);
    }
  }

  // Add new endpoints
  for (const key in newOps) {
    if (mdIndex[key]) continue;

    const ep = newOps[key];
    const normTag = normalizeKey(ep.tag);

    let folder = folderIndex[normTag];
    if (!folder) {
      folder = ep.tag.toLowerCase().replace(/\s+/g, "-");
      folderIndex[normTag] = folder;
      ensureDir(path.join(DOC_ROOT, folder));
      fs.writeFileSync(
        path.join(DOC_ROOT, folder, "README.md"),
        `# ${titleCase(ep.tag)} APIs\n`
      );
      console.log(` Created new folder for tag: ${ep.tag}`);
    }

    fs.writeFileSync(
      path.join(DOC_ROOT, folder, fileNameFor(ep.method, ep.path)),
      `# ${titleCase(ep.tag)} - ${ep.summary}

{% openapi src="${profile.openapiSrc}" path="${ep.path}" method="${ep.method}" %}
[${path.basename(profile.newJson)}](${profile.openapiSrc})
{% endopenapi %}
`
    );

    console.log(` Added new endpoint doc: ${key}`);
  }

  // Update README.md per folder
  for (const normTag in folderIndex) {
    const folder = folderIndex[normTag];
    const folderPath = path.join(DOC_ROOT, folder);
    const readme = path.join(folderPath, "README.md");

    const tagOp = Object.values(newOps).find(
      (o) => normalizeKey(o.tag) === normTag
    );
    if (!tagOp) continue;

    const newContent = buildReadmeContent(tagOp.tag, newOps);
    
    // Skip if README.md doesn't exist yet
    if (!fs.existsSync(readme)) {
      fs.writeFileSync(readme, newContent);
      console.log(` Created README.md for tag: ${tagOp.tag}`);
      continue;
    }
    
    const oldContent = fs.readFileSync(readme, "utf8");

    if (newContent !== oldContent) {
      fs.writeFileSync(readme, newContent);
      console.log(` Updated README.md for tag: ${tagOp.tag}`);
    }
  }

  // Cleanup empty folders
  for (const f of fs.readdirSync(DOC_ROOT)) {
    const p = path.join(DOC_ROOT, f);
    if (
      fs.statSync(p).isDirectory() &&
      fs.readdirSync(p).filter((x) => x.endsWith(".md")).length === 1
    ) {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(` Removed empty folder: ${f}`);
    }
  }

  syncRootReadme(profile.docsRoot, profile.name);

  //deleting temporary created json file for User_API and Admin_API 
    if (fs.existsSync(profile.oldJson)) {
        fs.unlinkSync(profile.oldJson);
    }
    console.log(` Deleted file: ${profile.oldJson}`);
}

/* ======================================================
   SUMMARY.md UPDATE
====================================================== */

function updateSummary() {
  if (!fs.existsSync(SUMMARY_PATH)) return;

  console.log("\n Updating SUMMARY.md");

  let lines = fs.readFileSync(SUMMARY_PATH, "utf8").split("\n");

  for (const p of API_PROFILES) {
    const anchorIdx = lines.findIndex(
      (l) => l.trim() === p.summaryAnchor
    );
    if (anchorIdx === -1) continue;

    let end = anchorIdx + 1;
    while (end < lines.length && lines[end].startsWith("  ")) end++;

    const docsRoot = p.docsRoot;
    const absRoot = path.join(ROOT_DIR, docsRoot);
    const children = [];

    for (const folder of fs.readdirSync(absRoot)) {
      const fp = path.join(absRoot, folder);
      if (!fs.statSync(fp).isDirectory()) continue;

      children.push(
        `  * [${titleCase(folder)}](${docsRoot}/${folder}/README.md)`
      );

      for (const f of fs.readdirSync(fp)) {
        if (!f.endsWith(".md") || f.toLowerCase() === "readme.md") continue;
        const c = fs.readFileSync(path.join(fp, f), "utf8");
        const title = c.match(/^#\s+(.+)$/m)?.[1];
        if (title)
          children.push(
            `    * [${title}](${docsRoot}/${folder}/${f})`
          );
      }
    }

    lines = [...lines.slice(0, anchorIdx + 1), ...children, ...lines.slice(end)];
    console.log(` Synced SUMMARY.md section for ${p.name} API`);
  }

  fs.writeFileSync(SUMMARY_PATH, lines.join("\n"));
}

/* ======================================================
   EXECUTION
====================================================== */

(async () => {
  await promptSwaggerUrls(API_PROFILES);

  API_PROFILES.forEach(processApi);
  updateSummary();

  console.log("\n Documentation sync completed successfully");
})();
 