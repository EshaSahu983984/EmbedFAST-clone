---
description: Follow the steps below to update the Tenant settings.
---

# Power BI Tenant settings

1. Go to the [Power BI web application/Power BI Service](https://app.powerbi.com/).
2. Click on the settings icon on the top right-hand corner and sign into the Power BI Admin Portal using your Power BI administrator credentials.&#x20;

<figure><img src="../../.gitbook/assets/5.1.png" alt=""><figcaption></figcaption></figure>

3. Once you're on the **Tenant settings** page, modify the settings detailed below:

<figure><img src="../../.gitbook/assets/5.2.png" alt=""><figcaption></figcaption></figure>

## **Admin API settings**

Scroll down within the Tenant settings page to find the **Admin API settings**. Configuring Admin API settings will give access or rights to administrators, enabling the app registration for the Power BI Service to work with Power BI operations. Configure the setting as detailed below:

* Expand the **Allow service principals to use read-only admin APIs** setting. Enable the setting using the toggle.&#x20;

{% hint style="info" %}
**Note:** Under the **Apply to** section of this setting, add the previously created Power BI Services security group into the **Specific security groups** section. Click **Apply** to save the changes.&#x20;

Repeat this step for _each setting_ detailed below.
{% endhint %}

<figure><img src="../../.gitbook/assets/5.3.png" alt=""><figcaption></figcaption></figure>

*   Expand the **Enhance admin APIs responses with detailed metadata** setting. Enable the setting using the toggle.&#x20;

    <figure><img src="../../.gitbook/assets/5.4.png" alt=""><figcaption></figcaption></figure>
*   Enable the **Enhance admin APIs responses with DAX and mashup expressions** setting using the toggle.&#x20;

    <figure><img src="../../.gitbook/assets/5.5.png" alt=""><figcaption></figcaption></figure>

## **Export settings**

Scroll down within the Tenant settings page to find the **Export and sharing settings**. These configurations are done for export related APIs in our application. Configure the setting as detailed below:

* Expand the **Export report as Word documents** setting. Enable the setting using the toggle.&#x20;

{% hint style="info" %}
**Note:** Under the **Apply to** section of this setting, add the previously created Power BI Services security group into the **Specific security groups** section. Click **Apply** to save the changes.&#x20;

Repeat this step for _each setting_ detailed below.
{% endhint %}

<figure><img src="../../.gitbook/assets/5.6.png" alt=""><figcaption></figcaption></figure>

*   Expand the **Export to Excel** setting. Enable the setting using the toggle. <br>

    <figure><img src="../../.gitbook/assets/5.7.png" alt=""><figcaption></figcaption></figure>
*   Expand the **Export to .csv** setting. Enable the setting using the toggle. <br>

    <figure><img src="../../.gitbook/assets/5.8.png" alt=""><figcaption></figcaption></figure>
*   &#x20;Expand the **Download reports** setting. Enable the setting using the toggle. <br>

    <figure><img src="../../.gitbook/assets/5.9.png" alt=""><figcaption></figcaption></figure>

## **Workspace settings**

Scroll down within the Tenant settings page to find the **Workspace settings**. These workspace settings allow Power BI app registrations to work with workspaces in applications, such as creating a new workspace through our application (tenant creation). Configure the setting as detailed below:

* Expand the **Create workspaces (new workspace experience)** setting. Enable the setting using the toggle.
*   Under the **Apply to** section, add the previously created Power BI Services security group into the **Specific security groups** section. Click **Apply** to save the changes. <br>

    <figure><img src="../../.gitbook/assets/6.0.png" alt=""><figcaption></figcaption></figure>

## **Developer settings**

Scroll down within the Tenant settings page to find the **Developer settings**. These settings are required for the app registration created for the Power BI Service to use Power BI related APIs. Configure the setting as detailed below:

* Expand the **Allow Service Principal to use Power BI APIs** setting. Enable the setting using the toggle.&#x20;

{% hint style="info" %}
**Note:** Under the **Apply to** section of this setting, add the previously created Power BI Services security group into the **Specific security groups** section. Click **Apply** to save the changes.&#x20;

Repeat this step for _each setting_ detailed below.
{% endhint %}

<div data-full-width="false"><figure><img src="../../.gitbook/assets/6.1.png" alt=""><figcaption></figcaption></figure></div>

*   Expand the **Allow service principals to create and use profiles** setting. Enable the setting using the toggle.<br>

    <figure><img src="../../.gitbook/assets/6.2.png" alt=""><figcaption></figcaption></figure>

## **Integration settings**

Scroll down within the Tenant settings page to find the **Integration settings**. Configure the setting as detailed below:

*   Expand the **Allow XMLA endpoints and analyze in Excel with on-premises datasets** setting. Enable the setting using the toggle.&#x20;

    <figure><img src="../../.gitbook/assets/6.3.png" alt=""><figcaption></figcaption></figure>
*   Ensure this setting is applied to **The entire organization**. Click **Apply** to save the changes.&#x20;

    Repeat this step for _each setting_ detailed below.

{% hint style="warning" %}
**Note:** This setting is applied _to the entire organization_ instead of a specific security group like in the previous steps.
{% endhint %}

