---
description: Windows PowerShell is needed to execute deployment scripts.
---

# Install PowerShell modules

Follow the steps below to install Azure and SQL PowerShell modules:

1. Select the **Windows key**. Search for "**Windows PowerShell**".
2. Right-click on **PowerShell** -> **Run as Administrator** to open Windows PowerShell as an Administrator.
3. Run the “**Install-Module -Name Az -AllowClobber -Force**” command on the Windows PowerShell terminal. This command installs the "Az" module in PowerShell, allowing us to use the PowerShell cmdlets provided by the module to manage Azure Services.&#x20;
4. Enter **Y** when asked if you want PowerShellGet to install and import the NuGet provider.
5. Run the “**Install-Module -Name SqlServer -AllowClobber -Force**” command on the Windows PowerShell terminal. This command is used to install the “SqlServer” module in PowerShell.

