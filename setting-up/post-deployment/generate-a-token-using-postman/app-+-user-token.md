# App + user token

Use this approach if you want an access token to have app + user context. In this case, EmbedFAST will retrieve user identification from the token and use it for authentication and authorization (access control and validation).

{% hint style="info" %}
**Note:**&#x20;

* The EmbedFAST Admin API **requires** this approach.
* The EmbedFAST User (Client) API can use this approach if authentication and authorization are integrated with Microsoft Entra ID.
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

| **Parameters**        | **Inputs**                                                                    |
| --------------------- | ----------------------------------------------------------------------------- |
| Token Name            | Create and enter a token name                                                 |
| Grant Type            | Select **Implicit**                                                           |
| Callback URL          | **https://oauth.pstmn.io/v1/browser-callback**                                |
| Auth URL              | **https://login.microsoftonline.com/\<Your-Tenant-ID>/oauth2/v2.0/authorize** |
| Client ID             | Enter the client ID of the EmbedFAST API's app registration                   |
| Scope                 | Enter the scope added in the EmbedFAST API's app registration                 |
| State                 | Leave this blank                                                              |
| Client Authentication | **Send as basic Auth header**                                                 |

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
