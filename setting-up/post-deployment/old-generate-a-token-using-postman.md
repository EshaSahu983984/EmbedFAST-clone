---
hidden: true
---

# \[OLD] Generate a token using Postman

1. Log into [Postman](https://www.postman.com/).
2.  Go to the **Workspaces** tab > **My Workspace**.<br>

    <figure><img src="../../.gitbook/assets/image (108).png" alt=""><figcaption></figcaption></figure>
3. Click on the **+** icon next to the **Overview** tab to create a new request.

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

4. This will take you to a new request page.

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

5. Paste this link “**https://login.microsoftonline.com/\<Your-Tenant-ID>/oauth2/v2.0/authorize**” in the URL entry field.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

6. Click on the **Authorization** tab below the entry field.

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

7. From the drop-down menu next to **Type**, select **OAuth 2.0**.

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

8. Add parameters under the **Configure New Token** section as detailed in the table below:

<figure><img src="../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

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
**Reminder:** Ensure that the callback URL is added as a redirect URI in the app registration for the EmbedFAST API, as detailed in [previous sections](add-the-redirect-uris.md).
{% endhint %}

9. Click on **Get New Access Token** after entering the parameters detailed above.<br>

<figure><img src="../../.gitbook/assets/image (165).png" alt=""><figcaption></figcaption></figure>

10. A dialog box will appear which confirms the completion of the authentication.\
    <br>

    <figure><img src="../../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>
11. You can copy the access token from the page shown below.<br>

    <figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>
