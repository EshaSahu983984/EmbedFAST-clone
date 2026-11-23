# Steps for Running the Automation Script

This document describes the steps required to run the automation script that updates the GitBook documentation for **EmbedFAST**.

---

## Step 1: Create a Feature Branch

- Create a new feature branch from the `main` branch in the EmbedFAST GitHub repository.
- This ensures documentation changes are isolated and reviewed before being merged.

---

## Step 2: Clone the Repository Locally

- Clone the newly created feature branch to your local machine.
- Open the project in **VS Code** (or any preferred code editor).

---

## Step 3: Initialize the Node.js Environment

- Navigate to the project root directory and run the following commands:

```bash
npm install
```

---

## Step 4: Execute the Script 
- Run the script using the following command: 
```bash
node automation_script.js
```

---

## Step 5: Clean Up Temporary Files 
- After the script execution completes, remove unnecessary files(or put it in .gitIgnore file) and folders, such as: 
    - node_modules
- This ensures only documentation changes are committed. 

---

## Step 6: Commit Changes 
- Review the generated documentation changes. 
- Commit the changes to your local feature branch with a meaningful commit message. 

---

## Validating GitBook Changes

To validate the changes in GitBook, follow these steps:

1. Visit [GitBook](https://www.gitbook.com/) and log in with your credentials.
2. In the left sidebar, locate the "Space" option. To the right of it, click the plus (+) icon and select "New Space" to create a new space.
3. From the Quick actions section, select "Sync with Git".
4. Choose "GitHub Sync" as your Git provider and click "Next Step".
5. Configure the sync for this space:
   - Authenticate using your GitHub account.
   - Select the account, repository, and branch from which you want to sync content to GitBook.
   - In the Initial Sync section, check the "GitHub to GitBook" box.
6. After completing the above steps, click the Sync button to sync GitBook with the selected branch.
7. Verify that the changes are accurately reflected in the GitBook preview.

**Note:** GitBook pages have a 200-character limit for titles. If a title is truncated, manually edit the title for the relevant endpoints to ensure it fits within 200 characters for proper display.

## Step 7: Create a Pull Request 
- Push the feature branch to GitHub. 
- Create a Pull Request (PR) targeting the main branch. 
- Request review from the relevant stakeholders. 

---

## Step 8: Merge Changes 
- After the PR is approved: 
- Merge the changes into the main branch. 
- The GitBook documentation will now reflect the latest API updates. 