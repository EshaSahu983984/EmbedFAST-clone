# Limitations

This section outlines the current product limitations to help you plan deployments, embedding scenarios, export workflows and alert configurations effectively.

## Embedding limitations

- Paginated reports support dynamic RLS only. Static RLS roles are not supported for paginated reports.
- Assets built on composite models are currently outside the supported embedding scope for EmbedFAST.
- Dashboards built on RLS-enabled semantic models are currently not supported for embedding.
- Embedding Power BI Apps is currently not supported.
- Direct Lake reports do not currently support Service Principal Profile-based embedding.
- Exports should be initiated after interacting with the report or the visual being exported. Without interaction, exports may intermittently return incorrect data or may not complete.
- The export button may intermittently remain disabled until the report is engaged with.
- During custom exports, users should interact with the visual being exported to help ensure all expected fields are available in the export field selection.
- Reports built on semantic models hosted in a different workspace are currently not supported for embedding.
- DirectQuery reports built on a Lakehouse SQL analytics endpoint with SSO authentication are currently not supported.
- Paginated reports created or modified directly in the Power BI Service cannot be edited within EmbedFAST.

## Export limitations

### Power BI default exports

- For paginated reports with dynamic RLS enabled, users must have at least `Viewer` access in the Power BI Service to export content.
- For paginated reports, RLS is supported only through report parameters. 

### Custom exports

- Some filter types are not supported for custom exports. 
    - The supported filter types for custom exports are `Advanced`, `Basic`, `RelativeDate`, `TopN`, `Hierarchy` and `RelativeTime`.
    - The `Unknown`, `IncludeExclude`, `Tuple`, `Identity` and `HierarchyIdentity` filter types are not supported for custom exports and are ignored during export processing. As a result, exported data may differ from the report view.
- Cross-highlighting is not supported for custom exports and is ignored during export processing. Exported data reflects the visual after slicers and filters are applied.
- Custom slicers and custom visuals are not supported during the custom export process.
- Exporting data columns with indirect dependencies between tables is not supported and may produce incorrect results.
- Visual level and report level data formatting are not supported during custom exports.
- Display names for some visual columns may intermittently fail to load. In these cases, the column name falls back to the format `'TableName'[ColumnName]`.
- Date hierarchies (auto-generated or custom) are supported for embedded filtering but are not recommended for export scenarios, as they may result in export failures or data mismatches. For consistent results between report visuals and exported data, use the underlying Date column instead of date hierarchy columns in visuals and slicers.
<figure><img src=".gitbook\assets\DateHierarchy.png" alt=""><figcaption></figcaption></figure>

## Custom data alerts limitations

- Row-Level Security (RLS) is not supported for the Custom Data Alerts feature. 
- Custom Data Alerts support report measures with up to 10 decimal places of precision. Measures with greater precision may cause equality-based alert conditions to evaluate incorrectly, potentially resulting in unexpected alert notifications.