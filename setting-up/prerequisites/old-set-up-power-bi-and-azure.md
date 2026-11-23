---
description: >-
  Detailed below are the Power BI and Azure-related prerequisite steps to
  complete to set up the EmbedFAST.
hidden: true
---

# OLD Set up Power BI and Azure

## Power BI

Ensure you have at least one embedded or premium Power BI capacity to use the EmbedFAST on. If one is not available, follow the steps detailed below to create a capacity:

1. Log into the [Azure portal](https://portal.azure.com).&#x20;
2.  Type “**Power BI Embedded**" in the search bar and select said option as it appears.&#x20;

    <figure><img src="../../.gitbook/assets/1.1 (1).png" alt=""><figcaption></figcaption></figure>
3. Click on **Create**.&#x20;

<figure><img src="../../.gitbook/assets/15.0.png" alt=""><figcaption></figcaption></figure>

4. Fill in the required information in the **Basics** tab (guidance provided below). Select **Next** to go through all the tabs. On the **Review + Create** tab, review the information provided and select **Create**.

<figure><img src="../../.gitbook/assets/15.1.png" alt=""><figcaption></figcaption></figure>

* PROJECT DETAILS
  * Subscription: Choose the same subscription that will be used to deploy the EmbedFAST in Azure Marketplace.
  * Resource group: Choose a resource group. The resource group should be inside the same tenant/subscription that will be used to deploy the EmbedFAST.
* RESOURCE DETAILS
  * Resource name: Create and enter a name. This is the embed capacity name and will be used for the [Configure the capacity settings](https://maqsoftware.gitbook.io/embed-fast-technical-documentation/setting-up/pre-deployment/set-up-and-configure-the-power-bi-tenant-settings#configure-the-capacity-settings) steps (in pre-deployment) and the steps following it. In our example, we have called it embeddedgen2.
  * Location: Choose a location.
  * Size: This is the Power BI embed capacity size. Select the resource size that best meets your needs.
  * Power BI capacity administrator: Enter the relevant user.



## Azure

### **Azure subscription**

You need an active Azure subscription to deploy resources. &#x20;

### **Owner role within the Azure subscription**

You need to grant yourself the “Owner” (Privileged Administrator) role for the subscription to create a managed application. This gives you full ownership and extensive permissions. Follow the steps listed below to assign yourself the Owner role:

1. Log into the [Azure portal](https://portal.azure.com).
2.  Type “**Subscriptions**" in the search bar and select said option as it appears.&#x20;

    <figure><img src="../../.gitbook/assets/5.0 (1).png" alt=""><figcaption></figcaption></figure>
3.  Click on your subscription's name to open its overview page.&#x20;

    <figure><img src="../../.gitbook/assets/5.1 (1).png" alt=""><figcaption></figcaption></figure>
4.  Select **Access Control (IAM)** from the left pane.&#x20;

    <figure><img src="../../.gitbook/assets/4.5 (2).png" alt=""><figcaption></figcaption></figure>
5.  Click on **Add** and select **Add role assignment** from the drop-down pane.&#x20;

    <figure><img src="../../.gitbook/assets/4.6 (2).png" alt=""><figcaption></figcaption></figure>
6. Select the **Privileged administrator roles** subsection and search for **Owner** in the search box.&#x20;
7.  Select the **Owner** role and click on **Next** at the bottom of the page.&#x20;

    <figure><img src="../../.gitbook/assets/4.7 (2).png" alt=""><figcaption></figcaption></figure>
8. Click on **Select members.**&#x20;
9.  Search for your account ID in the **Select** entry field and select it.&#x20;

    <figure><img src="../../.gitbook/assets/4.8 (2).png" alt=""><figcaption></figcaption></figure>
10. Review the details. Click on **Review + assign** to complete the process.&#x20;

    <figure><img src="../../.gitbook/assets/4.9 (2).png" alt=""><figcaption></figcaption></figure>

### **Resource group**

You need to have a resource group (in the Azure subscription) where all the resources related to this application will be deployed.&#x20;

* Having Owner access grants you full control over the subscription, allowing you to create, manage, and delete resources.
* You must have Owner access within the Azure subscription to deploy resources (follow the steps detailed in point 2. to assign this access).
* Follow the steps detailed below to create a resource group:
  1.  Type “**Resource groups**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.&#x20;

      <figure><img src="../../.gitbook/assets/13.6.png" alt=""><figcaption></figcaption></figure>
  2.  Click on **Create**.&#x20;

      <figure><img src="../../.gitbook/assets/13.7.png" alt=""><figcaption></figcaption></figure>
  3.  On the **Create a resource group** page, provide the following information:&#x20;

      <figure><img src="../../.gitbook/assets/13.8.png" alt=""><figcaption></figcaption></figure>

      * Subscription: The subscription where you have Owner access on it.
      * Resource Group: Create and enter a unique name for your resource group. This name could be descriptive and reflect the purpose of the resource group.
      * Region: Choose the Azure region where you want to create the resource group. Note that it can affect billing and management.
  4. Click on **Review + create** to create the resource group. Azure will validate your configuration for any errors.
  5.  You can access and manage the resource group by navigating to **Resource groups** in the left-hand menu of the Azure portal.

