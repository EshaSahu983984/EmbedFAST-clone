---
description: >-
  Detailed below are the Integrated Development Environment (IDE) prerequisite
  steps to complete to set up the EmbedFAST.
hidden: true
---

# OLD Set up the Integrated Development Environment (IDE)

## **IDE (Integrated Development Environment) or Text Editor**

We recommend using Visual Studio Code (VS Code) as your IDE or text editor to set up the EmbedFAST as the steps were written with VS Code in mind. VS Code supports Bicep syntax highlighting and ensures a smooth development experience.

## Setting up a Bicep Development Environment

The Bicep development environment is needed to work with Bicep scripts and to run them in order to deploy resources on Azure.

### **Windows PowerShell**

Windows PowerShell is needed to execute deployment scripts. Install Windows PowerShell from the [Microsoft website](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3).

### **Windows PowerShell Extension**

The Windows PowerShell Extension is needed to run deployment scripts in VS code through the PowerShell terminal. Follow the steps listed below to install the PowerShell Extension in VS Code:

1. Open Visual Studio Code.&#x20;
2. Click on the **Extensions** icon in the sidebar.&#x20;
3. Search for "**PowerShell**" in the **Extensions** view.&#x20;
4. Find and install the [PowerShell extension](https://code.visualstudio.com/docs/languages/powershell) by Microsoft.&#x20;
5. Restart Visual Studio Code. The PowerShell extension is now installed and ready to use.&#x20;

### Bicep CLI

The Bicep CLI (Command-Line Interface) tool is needed to set up your environment for working with Bicep files and deploying Azure resources. Install the Bicep CLI by downloading the [EXE file](https://github.com/Azure/bicep/releases/latest/download/bicep-setup-win-x64.exe). Follow the setup steps detailed in the pop-up window.

### **Azure CLI**

Azure CLI is needed to execute and install Az (Azure) modules/commands in PowerShell. Install the Azure CLI (Command-Line Interface) by downloading the [installer package](https://aka.ms/installazurecliwindows). Follow the setup steps detailed in the pop-up window.

## PowerShell Configuration

Follow the steps below to configure PowerShell to install Azure and SQL-related modules:

1. Select the **Windows key**. Search for "**Windows PowerShell**".
2. Right-click on **PowerShell** -> **Run as Administrator** to open Windows PowerShell as an Administrator.
3. Run the “**Install-Module -Name Az -AllowClobber -Force**” command on the Windows PowerShell terminal. This command installs the "Az" module in PowerShell, allowing us to use the PowerShell cmdlets provided by the module to manage Azure Services.&#x20;
4. Enter **Y** when asked if you want PowerShellGet to install and import the NuGet provider.
5. Run the “**Install-Module -Name SqlServer -AllowClobber -Force**” command on the Windows PowerShell terminal. This command is used to install the “SqlServer” module in PowerShell.

