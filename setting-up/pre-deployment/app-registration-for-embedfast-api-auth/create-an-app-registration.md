# Create an app registration

To create an app registration, you must have one of the following Microsoft Entra roles:

* Global Administrator
* Cloud Application Administrator&#x20;

{% hint style="info" %}
**Note:** A Global Administrator is typically the person who signs up for the Microsoft Entra ID tenant. View the guide on [assigning Microsoft Entra roles to users](https://learn.microsoft.com/en-us/azure/active-directory/roles/manage-roles-portal) for more information.
{% endhint %}

1. Log into the [Azure portal](https://portal.azure.com).&#x20;
2.  Type “**Microsoft Entra ID**" in the search bar and select said option as it appears.

    <figure><img src="../../../.gitbook/assets/16.2 (1).png" alt=""><figcaption></figcaption></figure>
3.  Select **App registrations** (under Manage) from the left pane and click on **New registration**. This will take you to the **Register an application** page.&#x20;

    <figure><img src="../../../.gitbook/assets/16.4 (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/1.2 (2).png" alt=""><figcaption></figcaption></figure>

4. Enter an application name in the **Name** section. This will be displayed to users and can be changed later.&#x20;
5.  Under the **Supported account types** section, select one of these options:

    * **Accounts in any organizational directory (------ only - Single tenant)** option (in our example, the "**------**" is MAQ Software, but this blank should have the name of your tenant instead).
    * **Accounts in any organizational directory (Any Azure directory - Multitenant)** option.



    {% hint style="info" %}
    **Note:** Either option will work. The choice between them depends on factors such as organizational policies, preference, etc.
    {% endhint %}

    &#x20;
6. Click on **Register** to create the application.
7. After the app registration is created, you will see a summary page listing the details of your application.

<figure><img src="../../../.gitbook/assets/1.3 (2).png" alt=""><figcaption></figcaption></figure>

8. Select **Manifest** (under Manage) from the left pane to modify the JSON Representation as follows:&#x20;

<figure><img src="../../../.gitbook/assets/1.4 (2).png" alt=""><figcaption></figcaption></figure>

9. Set the **“allowPublicClient”** property to **true**.
10. Set the **“oauth2AllowIdTokenImplicitFlow”** property to **true**.&#x20;
11. Click on **Save** after the 2 changes are made.
