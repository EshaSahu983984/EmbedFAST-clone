# Best practices for resource handling

After deploying your resources, it's crucial to enable locks on the resource group. This simple action acts as a shield, preventing accidental deletion or modification of critical components within the group. By implementing locks, you establish an additional layer of protection that safeguards the integrity of your application and prevents unintended changes.

{% hint style="info" %}
Learn more about implementing and managing locks on Azure resource groups: [Implement resource locking in Azure](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json)
{% endhint %}



### Enable backups for SQL Server

Regular backups are essential for data protection and disaster recovery. Ensure that the backup functionality is enabled for your SQL Server resources to safeguard against data loss. Azure provides various options for automated backups and recovery solutions.

{% hint style="info" %}
Explore how to set up backups for the Azure SQL Database using Azure Backup: [Automate backups in Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/automated-backups-overview?view=azuresql)
{% endhint %}



### Enable encryption and masking for PII columns

Securing Personally Identifiable Information (PII) in your databases is essential for both data security and compliance with privacy laws. Azure's sophisticated security tools allow you to encrypt sensitive data while at rest and apply masking to particular columns, thereby limiting unauthorized access.

To enhance data security and comply with privacy regulations, implement encryption and masking for Personally Identifiable Information (PII) columns within your databases. Utilize Azure's advanced security features to encrypt sensitive data at rest and mask specific columns to restrict unauthorized access.

{% hint style="info" %}
Learn how to implement encryption and masking for sensitive data in Azure SQL Database: [Implement dynamic data masking and encryption in Azure SQL Database](https://learn.microsoft.com/en-us/sql/relational-databases/security/dynamic-data-masking?view=sql-server-ver16)
{% endhint %}

&#x20;

Adhering to these best practices can significantly improve the security and manageability of your Azure resources, creating a fortified and compliant environment for your application.
