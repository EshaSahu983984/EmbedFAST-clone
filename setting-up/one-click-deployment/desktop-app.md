# Desktop App

1. Download the Desktop app, [UI+SDK](https://embedfastsolutionbuilds.blob.core.windows.net/powershellscripts/EmbedFASTUISDK.exe) or [SDK Only](https://embedfastsolutionbuilds.blob.core.windows.net/powershellscripts/EmbedFASTSDKOnly.exe).
2. Open the downloaded EmbedFASTUISDK / EmbedFASTSDKOnly setup file to start the installation process.

![](../../.gitbook/assets/img1.png)

3. Click **Next** to proceed.
4. Choose the destination folder for installation and click **Next** .

![](../../.gitbook/assets/img2.png)

5. Ensure 'Create desktop icon' is checked. Click 'Next' to initiate the installation process.

![](../../.gitbook/assets/img3.png)

6. Once the installation is complete, click **Finish** to exit the setup.

![](../../.gitbook/assets/img4.png)

7. Go to Desktop and search for EmbedFASTUISDK / EmbedFASTSDKOnly shortcut created. Double click on it to open.
8. Assign yourself the Owner role on the subscription where the EmbedFAST deployment will take place.

![](../../.gitbook/assets/img5.png)

9. It will display a variety of prompts. Provide the information as requested. More details regarding the prompts are provided below.

### **Enter your subscription ID**

Follow the steps below to find your subscription ID:

1. Type “ **Subscriptions** " in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](../../.gitbook/assets/img6.jpeg)

2. Copy the subscription ID as shown below.

![](../../.gitbook/assets/img7.jpeg)

3. In the Desktop App , paste/enter the subscription ID from the previous step.

### **Enter your tenant ID**

Navigate to your **Azure Active Directory** --> **Overview** and copy the tenant ID as shown below. Paste/enter the ID into the PowerShell terminal.

![](../../.gitbook/assets/img8.jpeg)

## **Pre-Deployment Section**

In this section, you have the option to create a Power BI Embedded Capacity, a Microsoft Entra security group, an app registration for API authentication, and an app registration for Power BI Service.

The app registrations for API authentication and Power BI Service are necessary to be created as part of the pre-deployment process.

### **Power BI Embedded Capacity**

Ensure you have at least one embedded or premium Power BI capacity to use the EmbedFAST on. If not available, uncheck the capacity checkbox to create a capacity .

### **Enter capacity name-**

Enter the name used to identify this resource and is displayed in the Power BI admin portal and Azure portal. The name must be unique in the selected location. Only lowercase letters and numbers may be used.

### **Enter capacity location-**

The location where the capacity will be deployed.

### **Enter resource group name-**

Choose a resource group. The resource group should be inside the same tenant/subscription that will be used to deploy the EmbedFAST.

### **Enter capcity size-**

This is the Power BI Embedded Capacity size. Select the resource size (A1 to A8) that best suits your needs.

### **Microsoft Entra security group**

Uncheck the checkbox if you want do not have a **Microsoft Entra security group** and wish to create one instead.

### **Enter group name-**

Enter a name for the group.

### **App registration for EmbedFAST API Auth**

To create an app registration, you must have one of the following Microsoft Entra roles:

* Global Administrator
* Cloud Application Administrator

{% hint style="info" %}
**Note:** A Global Administrator is typically the person who signs up for the Microsoft Entra ID tenant. View the guide on [assigning Microsoft Entra roles to users](https://learn.microsoft.com/en-us/azure/active-directory/roles/manage-roles-portal) for more information.
{% endhint %}

### **Enter application name-**

The user-facing display name for this application.

### **App registration for Power BI Service**

### **Enter application name-**

The user-facing display name for this application.

### **Enter security group name-**

Enter the group name you provided earlier when creating the security group, or if you already have a security group, enter its name. The Power BI App registraton will be added as a member to this security group.

After filling in all the fields to create the necessary resources, click the **Validate Resources** button to validate the resource names.

If all resource names are validated successfully, click the **Deploy Selected Resources** button.

### **Log into Azure through the** **Browser** **pop-up window**

Choose an account to log into Azure with.

![](../../.gitbook/assets/img9.jpeg)

Once the pre-deployment is successfully completed, follow the steps below:

### **Power BI capacity administrator**

To work with Power BI Embedding, you need to add the app registration for the Power BI Service as a Power BI capacity administrator. Follow the instructions below:

1. Type “**Power BI Embedded**" in the Azure search bar and select said option as it appears.

![](../../.gitbook/assets/img10.jpeg)

2. Select the capacity name as shown below:

![](../../.gitbook/assets/img11.jpeg)

3. This will open an overview page, as shown below:

![](../../.gitbook/assets/img12.jpeg)

4. Select **Power BI capacity administrators** (under Settings) from the left pane.

![](../../.gitbook/assets/img13.jpeg)

5. Click on **Add** . An **Add capacity administrators** pane will appear on the right side.

![](../../.gitbook/assets/img14.jpeg)

6. Search for the app registration created for the Power BI Service. Add it and click **Select** to save the changes.

![](../../.gitbook/assets/img15.jpeg)

{% hint style="info" %}
**About admin consent**

Example (select the image to view it in a larger size): In the image below, the **Tenant.Read.All** API displays a warning, "**Not granted for ------**". This means that admin consent has not been granted.

<img src="../../.gitbook/assets/13.9.png" alt="" data-size="original">

To grant admin consent:

1. Navigate to **API permissions** (under **Manage**).
2. Select **Grant admin consent for ------**. This will grant admin consent for all APIs that do not have the admin consent. ![](../../.gitbook/assets/14.0.png)
3. Once the consent is granted, the previous warning will now say "**Granted for ------**". The warning icon will turn into a green tick. ![](../../.gitbook/assets/14.1.png)
{% endhint %}

### **Add Role assignments**

To work with capacities, you need to provide Contributor role to the app registration for the Power BI Service on the resource group for capacity created in the pre-deployment steps.

Follow the steps below to find the capacity resource group name:

1. Type “**Power BI Embedded**" in the Azure search bar and select said option as it appears.

![](<../../.gitbook/assets/3.9 (1).png>)

2. Select the capacity that you will use in EmbedFAST as shown below :

![](../../.gitbook/assets/img20.png)

3. Here in the overview page, you can find the capacity resource group name and copy it directly to your clipboard.

![](../../.gitbook/assets/img21.png)

4. Navigate to this resource group by following the below steps:

![](../../.gitbook/assets/img22.png)

5. Navigate to the Access control (IAM) section

![](../../.gitbook/assets/img23.png)

6. Click on Add button and select add role assignment

![](../../.gitbook/assets/img24.png)

7. Go to Priviledged administrator roles and select Contributor role and click on Next

![](../../.gitbook/assets/img25.png)

8. Click on Select members

![](../../.gitbook/assets/img26.png)

9. Search for your Power BI App registration and select it

![](../../.gitbook/assets/img27.png)

10. Click on Review + assign and this will add the contributor role for Power BI App registration on the selected resource group.

## **Provide the Contributor role to Power BI App registration on the Managed resource group**

This is the name of the managed resource group in your subscription where EmbedFAST’s resources are deployed. The managed resource group is created under the resource group that was created in the prerequisites section. Follow the steps below to find the name of your managed resource group:

1. Type “**Resource groups**" in the search bar and select said option as it appears.
2. Find and select the managed application as shown in the image below:

![](../../.gitbook/assets/img28.png)

3. Copy the name of the managed resource group.

![](../../.gitbook/assets/img29.png)

4. Navigate to this resource group and go to Access control (IAM) section.

![](../../.gitbook/assets/img30.png)

5. Go to Priviledged administrator roles and select Contributor role and click on Next.

![](../../.gitbook/assets/img54.png)

6. Click on Select members.

![](../../.gitbook/assets/img55.png)

7. Search for your Power BI App registration and select it.

![](../../.gitbook/assets/img56.png)

8. Click on Review + assign and this will add the contributor role for Power BI App registration on the selected resource group.

## **Post-Deployment section**

### **Enter managed resource group name**

This is the name of the managed resource group in your subscription where EmbedFAST’s resources will be deployed to. The managed resource group is created under the resource group that was created in the prerequisites section. Follow the steps below to find the name of your managed resource group:

1. Type “ **Resource groups** " in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.
2. Find and select the managed application as shown in the image below:

![](../../.gitbook/assets/img31.jpeg)

3. Copy the name of the managed resource group.

![](../../.gitbook/assets/img32.jpeg)

4. Paste/enter the managed resource group name in the Desktop App .

### **Enter** **Power BI app** **registration** **name**

On the owned applications page, select the app registration you created for power bi service . You can find the name of the service principal in the top-left corner of the page.

![](../../.gitbook/assets/img39.jpeg)

### **Enter your application name**

5. Provide the name of your app

### **Enter your service principal client secret**

Follow the steps below to create a client secret:

{% hint style="danger" %}
**Note: The client secret will only be visible at the time of creation.** Take note of it and store it securely for future use for whenever the client secret is required.
{% endhint %}

1. Type "**App registrations**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](<../../.gitbook/assets/image (21) (1).png>)

2. Click on **Owned applications** to see a list of applications you registered. Search for the application created for the Power BI Service on this page.

![](../../.gitbook/assets/img40.jpeg)

3. Click on the application's name to access its details page.
4. Select **Certificates & secrets** (under Manage) from the left pane.

![](../../.gitbook/assets/8.3.png)

5. Click on **New client secret** to create a client secret.

![](../../.gitbook/assets/8.4.png)

6. Enter a description and select when the secret expires. Click on **Add** to add the client secret.

![](../../.gitbook/assets/8.5.png)

7. Copy the value of the newly created client secret as shown below.

![](../../.gitbook/assets/8.6.png)

{% hint style="danger" %}
**Reminder:** Take note of the client secret and store it securely for future use for whenever it is required. The client secret is only visible at the time of creation and will **NOT** be visible again.
{% endhint %}

### **Enter capacity resource group name**

1. Type “**Power BI Embedded**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](../../.gitbook/assets/img33.png)

2. Once on the page, you will see a list of **Power BI Embedded Capacity** displayed. Select the embedded capacity that you have created earlier in the section.

![](../../.gitbook/assets/img34.png)

3. Copy the capacity resource group name as shown below.

![](../../.gitbook/assets/img35.png)

4. In the EmbedFAST application, paste/enter the capacity resource group name from the previous step.

### **Enter API Auth App Registration Name**

This app registration name is obtained from the overview page of the app registration previously created for the EmbedFAST API as part of the pre-deployment steps. Follow the steps below:

1. Type "**App registrations**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](../../.gitbook/assets/img36.jpeg)

2. Click on **Owned applications** to see a list of applications you registered, including the ones for the API and Power BI Service done in the pre-deployment steps.

![](../../.gitbook/assets/img40.jpeg)

3. In the overview page, you can directly copy the application name to clipboard as shown below:

![](../../.gitbook/assets/img38.png)

### **Select Email Client**

1. When selecting the **Email Client**, you will see two options in the dropdown — **SMTP** or **SendGrid**.
2. If you select **SMTP**, enter the **Email Password**.
3. If you select **SendGrid**, provide the **SendGrid API Key**.

**Enter the sender email**

Provide an email address. This email will be used for sending subscription emails to other users.

**Enter the sender email password**

Provide the password for the email address provided in the previous step.

**Enter the SendGrid API key**

Provide the SendGrid API key.

Click the **Start Post-Deployment Operation** button. This will initiate a post-deployment process that performs the operations outlined below:

* Add your client IPv4 address to Set Server Firewall.
* Grant the necessary permissions to the service principal app registration on the Database. It will give admin access on the Database created.
* Add the Power BI App service principal as an external Azure AD user.
* Grant permissions to the user.

{% hint style="info" %}
**Note:** If an error occurs (e.g., “Client with IP address ‘IP-Address’ is not allowed to access the server”), you have the option to manually include the IP in the server's firewall rules. Follow the steps detailed below to do so:

1. Type “**Resource groups**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.
2.  Find and select the managed application as shown in the image below:

    <figure><img src="../../.gitbook/assets/14.3 (2).png" alt=""><figcaption></figcaption></figure>
3.  Click on the **Managed resource group** value on right side of the page, it will take you to the managed resource group where all the resources are deployed. /

    <figure><img src="../../.gitbook/assets/14.4 (1).png" alt=""><figcaption></figcaption></figure>
4.  Select the SQL server deployed with the application's name.

    <figure><img src="../../.gitbook/assets/13.4 (2).png" alt=""><figcaption></figcaption></figure>
5. Select **Networking** (under Security) from the left pane.
6.  Click on **Add a firewall rule**.

    <figure><img src="../../.gitbook/assets/13.4 (3).png" alt=""><figcaption></figcaption></figure>
7.  Enter the IP address that was not allowed to access the server in the **Start IP** and **End IP** fields. Select **OK** to save the changes.

    <figure><img src="../../.gitbook/assets/13.5 (2).png" alt=""><figcaption></figcaption></figure>
{% endhint %}

This completes the deployment process.

## **Recovery Management**

The Desktop App saves your progress after each post-deployment step. If the app closes or a step fails, you can continue from where you left off the next time you open it, without starting over.

### **Checkpoint detection**

When you open the Post-Deployment tab, the app checks your saved progress and then shows the right actions:

* **No saved progress found** — **Start Post-Deployment Operation** runs from the beginning.
* **Saved progress is invalid** — the app shows **Delete Checkpoint** and **Start Fresh** so you can clear it and begin a new run.
* **Saved progress is valid** — the **Recovery Management** panel appears, along with **Run**, **Resume**, and **Discard**.

<figure><img src="../../.gitbook/assets/checkpoint-detection.png" alt=""><figcaption></figcaption></figure>

### **Run, Resume, and Discard**

Three buttons are available when saved progress exists:

| Button | What it does |
|---|---|
| **Run** | Starts a new post-deployment run. If you selected specific steps in the Recovery Management panel, it runs only those steps. |
| **Resume** | Continues only the remaining required steps so you can complete the process quickly. |
| **Discard** | Clears saved progress after confirmation, so the next run starts fresh. |

### **Recovery Management panel**

This collapsible panel appears when valid saved progress is found. It shows:

* **Overall Status**, **Deployment Mode**, **Started** time, and **Last Updated** time.
* A status grid showing each post-deployment step and whether it is Not Started, Completed, Failed, Skipped, or Aborted.
* Checkboxes to choose specific steps to run with the **Run** button.

<figure><img src="../../.gitbook/assets/recovery-management-panel.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** If you select a step that depends on an earlier incomplete step, the app alerts you and automatically includes that earlier step. If you select a step already marked Completed, the app asks for confirmation before running it again.
{% endhint %}

### **Resolving a failed step**

If a step fails, the app pauses and shows what failed, then offers **Retry**, **Skip**, or **Abort**.

* **Retry** runs the same step again immediately.
* **Skip** moves to the next step and keeps your progress saved.
* **Abort** stops the run so you can continue later.

When a required value is missing, the app checks whether an earlier step can provide it and offers a targeted recovery:

* If an earlier step can provide that value, the dialog shows **Missing Context Key — Recovery Available** and includes that prerequisite step automatically.
* For all other failures, the standard **Retry / Skip / Abort** options are shown.

<figure><img src="../../.gitbook/assets/resolving-failed-step.png" alt=""><figcaption></figcaption></figure>

### **Discarding a checkpoint**

Selecting **Discard** asks for confirmation before clearing saved progress. Use this when you want to stop the current partial run and begin again.

## **Re-Deployment section**

## **Enter your subscription ID**

Follow the steps below to find your subscription ID:

1. Type "**Subscriptions**" in the search bar and select said option as it appears.

![](../../.gitbook/assets/img6.jpeg)

2. Copy the subscription ID as shown below.

![](../../.gitbook/assets/img7.jpeg)

3. In the Desktop App , paste/enter the subscription ID from the previous step.

## **Enter your tenant ID**

Navigate to your **Azure Active Directory** --> **Overview** and copy the tenant ID as shown below. Paste/enter the ID into the PowerShell terminal.

![](../../.gitbook/assets/img8.jpeg)

## **Enter managed resource group name**

This is the name of the managed resource group in your subscription where EmbedFAST’s resources are deployed. The managed resource group is created under the resource group that was created in the prerequisites section. Follow the steps below to find the name of your managed resource group:

1. Type "**Resource groups**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.
2. Find and select the managed application as shown in the image below:

![](../../.gitbook/assets/img31.jpeg)

3. Copy the name of the managed resource group.

![](../../.gitbook/assets/img32.jpeg)

4. Paste/enter the managed resource group name in the Desktop App like the previous steps.

## **Enter Location-**

1. Enter the location where you want the DAX resources to get deployed, if not already present.

## **Enter App name-**

Provide the same name that you used as the base name to create resources at the time of marketplace deployment.

## **Enter Service principal client secret-**

1. Type "**App registrations**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](<../../.gitbook/assets/image (21) (1).png>)

2. Click on **Owned applications** to see a list of applications you registered. Search for the application created for the Power BI Service on this page.

![](../../.gitbook/assets/img37.jpeg)

3. Click on the application's name to access its details page.
4. Select **Certificates & secrets** (under Manage) from the left pane.

![](../../.gitbook/assets/8.3.png)

5. Copy the value of the client secret as shown below.

![](../../.gitbook/assets/8.6.png)

## **Enter Power BI app registration name**

On the owned applications page, select the app registration you created for power bi service , you can find the name of your service principal at the top left corner of your page.

![](../../.gitbook/assets/img39.jpeg)

## **Enter API Auth App Registration Name**

This app registration name is obtained from the overview page of the app registration previously created for the EmbedFAST API as part of the pre-deployment steps. Follow the steps below:

1. Type "**App registrations**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](<../../.gitbook/assets/image (21) (1).png>)

2. Click on **Owned applications** to see a list of applications you registered, including the ones for the API and Power BI Service done in the pre-deployment steps.

![](../../.gitbook/assets/img37.jpeg)

3. In the overview page, you can directly copy the application name to clipboard as shown below:

![](../../.gitbook/assets/img38.png)

**Enter the SendGrid API key**

Provide the SendGrid API key.

## **Enter Previous EmbedFAST Version**

Select the previously deployed version of EmbedFAST.

Click on the Redeploy button to start the redeploy process. This will redeploy the app and also update the database

## **Log into Azure through the** **Browser** **pop-up window**

Choose an account to log into Azure with.

![](../../.gitbook/assets/img9.jpeg)

Click the **Redeploy** button. This will initiate a re-deployment process that performs the operations outlined below:

* Update the solution builds
* Update the database
* Deploy the Azure service bus and queues

## **Provide Role to the Azure Service Bus**

1. Type “**Service Bus**" in the [Azure portal](https://portal.azure.com) search bar and select said option as it appears.

![](<../../.gitbook/assets/Image (186).png>)

2. On this page go to your service bus resource and navigate to Access Control in the left pane and select Add role assignment.

![](<../../.gitbook/assets/Image (187).png>)

3. Search **Azure bus service data sender** in the search and click next.

![](<../../.gitbook/assets/Image (188).png>)

4. In the next page click on **select members**.

![](<../../.gitbook/assets/Image (189).png>)

5. In the search bar on the right pane, look for your function app and User api web app, select it, and then click **Review + assign**.

![](<../../.gitbook/assets/Image (190).png>)

**SMTP and SendGrid configuration details**

**For SMTP**

1. Configure SendEmailClient in app settings of both User API and Function App to SMTP
2. Configure SenderEmail in Key Vault

**For SendGrid**

1. Configure SendEmailClient in app settings of both User API and Function App to SendGrid
2. Configure SenderEmail and SendGridAPIKey in Key Vault
