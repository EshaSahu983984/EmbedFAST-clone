# App-only token

Use this approach if you want an access token to have app-only context. In this case, EmbedFAST will use an app-only token for authentication and retrieve user identification from the ‘embedfast-user-id’ header parameter to use for authorization (access control and validation).

{% hint style="info" %}
**Note:**&#x20;

* The EmbedFAST Admin API **does not** support this approach.
* The EmbedFAST User (Client) API can use this approach if you need to integrate with any available authentication providers.
{% endhint %}



1. Log into [Postman](https://www.postman.com/).
2.  Go to the **Workspaces** tab > **My Workspace**.<br>

    <figure><img src="../../../.gitbook/assets/image (108).png" alt=""><figcaption></figcaption></figure>
3. Click on the **+** icon next to the **Overview** tab to create a new request.

<figure><img src="../../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

4. This will take you to a new request page.

<figure><img src="../../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

5. Click on the **Authorization** tab below the entry field.

<figure><img src="../../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

6. From the drop-down menu next to **Type**, select **OAuth 2.0**.

<figure><img src="../../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

7. Add parameters under the **Configure New Token** section as detailed in the table below:

<figure><img src="../../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

| **Parameters**        | **Inputs**                                                                 |
| --------------------- | -------------------------------------------------------------------------- |
| Token Name            | Create and enter a token name                                              |
| Grant Type            | Select **Client Credentials**                                              |
| Access Token URL      | **https://login.microsoftonline.com/\<Your-Tenant-ID>/oauth2/v2.0/ token** |
| Client ID             | Enter the client ID of the EmbedFAST API's app registration                |
| Client Secret         | Enter the client secret of the EmbedFAST API's app registration            |
| Scope                 | **api://\<Client-ID>/.default**                                            |
| Client Authentication | **Send as basic Auth header**                                              |

{% hint style="info" %}
**Reminder:** Ensure that the callback URL is added as a redirect URI in the app registration for the EmbedFAST API, as detailed in [previous sections](../add-the-redirect-uris.md).
{% endhint %}

8. Click on **Get New Access Token** after entering the parameters detailed above.<br>

<figure><img src="../../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>

9. A dialog box will appear which confirms the completion of the authentication.\
   <br>

<figure><img src="../../../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

10. You can copy the access token from the page shown below.<br>

    <figure><img src="../../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>
