# FAQ

## General questions

**What is the significance of the offer being 'transactable'?**

Being 'transactable' means that you can now purchase and manage subscriptions for this offer directly through Azure Marketplace. This streamlines your purchasing and billing processes.

&#x20;

**What plans are available for this offer?**

Our offer includes two plans to suit different needs: the Basic Tier and the Premium Tier.

&#x20;

**How do I choose the right plan for me?**

Choose the best plan for you by comparing the tier’s features and resources with your specific requirements and budget.

&#x20;

## Plan-specific questions

### Basic Tier

**What features and resources are included in the Basic Tier?**

* **Application access**: You get a single instance of the application.
* **Installation**: Complete installation setup is included.
* **User capacity**: There is no limit on the number of users.
* **Updates**: Free upgrades to the application are included.

Explore the full range of features offered by the Basic Tier by visiting the [EmbedFAST website](https://maqsoftware.com/embedFAST.html).

&#x20;

**What are the limitations of the Basic Tier?**

* **Number of instances**: The Basic Tier allows only a single instance of the application.
* **Technical support**: Unlike the Premium Tier, the Basic Tier does not include dedicated technical support hours or live support options like phone or email assistance.

Discover how the Premium Tier can better meet your needs with its expanded features on the [EmbedFAST website](https://maqsoftware.com/embedFAST.html).

&#x20;

### Premium Tier

#### General information

**What additional features and resources are included in the Premium Tier?**

* **Multiple application instances**: Unlike the Basic Tier, the Premium Tier allows for unlimited instances of the application, offering greater flexibility and scalability.
* **Additional support**: The plan includes technical support hours from 7 AM to 5 PM ET, Monday through Friday, and live support options via phone or email, providing comprehensive assistance.
* **Complete installation setup**: Like the Basic Tier, a complete installation setup is included.
* **Unlimited users**: There's no limit on the number of users, accommodating large teams and organizations.
* **Free upgrades**: The plan also includes free upgrades, ensuring access to the latest features and improvements.

Learn about the Premium Tier’s complete list of features and resources on the [EmbedFAST website](https://maqsoftware.com/embedFAST.html).

&#x20;

**Who is the Premium Tier best suited for?**

* **Large enterprises and organizations**: Ideal for larger businesses needing multiple instances of the application.
* **Global companies**: Ideal for multinational corporations needing round-the-clock support and a scalable solution to cater to a global user base.
* **Growth-focused organizations**: Businesses aiming to scale rapidly will benefit from the unlimited application instances and user capacity.
* **High-demand environments**: Perfect for settings where constant access to the latest features is crucial.
* **Businesses with complex operations**: Organizations with multifaceted operational needs that require robust, customizable solutions.
* **Data-intensive sectors**: Well-suited for sectors like finance or healthcare, where large volumes of data require secure, reliable, and efficient management.

Contact [Sales@MAQSoftware.com](mailto:Sales@MAQSoftware.com) to learn more about how EmbedFAST’s Premium Tier can empower your organization today.

&#x20;

#### Purchasing and billing

**How do I purchase the EmbedFAST?**

1. Navigate to the offer page in [Azure Marketplace](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/maqsoftware.embedfastpowerbi/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22maqsoftware.embedfastpowerbipremium%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%2227b03ed9-c6cd-4708-812b-90d339a0e751%22%7D/searchTelemetryId/a226c970-1255-4ba3-bbf8-658c31299938).
2. Select a plan type from the drop-down menu and select Create.
3. Follow the on-screen instructions and fill out the information required to finalize your purchase.

For more help, please refer to our detailed [technical documentation](https://maqsoftware.gitbook.io/embed-fast-technical-documentation/setting-up/deployment/deploy-automatically-via-azure-marketplace) that outlines the process step-by-step.

&#x20;

**How will I be billed for my subscription?**

Your subscription charges will be included on your monthly Azure invoice, listed under your overall Azure service usage

&#x20;

**Can I change my plan post-purchase?**

Yes, you have the flexibility to upgrade or downgrade your plan at any time through the Azure portal.

&#x20;

#### Subscription management

**How do I manage my subscription?**

Access and manage your subscription directly via the Azure portal, using a similar interface and process as with other Azure services.

&#x20;

**How do I add or remove users?**

Adding users:

Users can be added to the application using the admin API. To add a user, use the POST method at the /users endpoint. Provide the Azure Entra IDs of the users with specific asset details of a logical tenant.

Removing users:

To remove users, use the DELETE method at the /users endpoint. Simply include the user's Azure Entra ID to delete the user from the system.

For more assistance, contact [Sales@MAQSoftware.com](mailto:Sales@MAQSoftware.com).

&#x20;

**How can I get support?**

Contact us at [Sales@MAQSoftware.com](mailto:Sales@MAQSoftware.com) for detailed inquiries and support requests.

####

#### Additional information

**What are the technical requirements for using this offer?**

1.  Set up Power BI and Azure:

    * **Power BI capacity**: Ensure at least one embedded or premium Power BI capacity is available. Follow the steps provided in our [technical documentation](https://maqsoftware.gitbook.io/embed-fast-technical-documentation/setting-up/prerequisites/set-up-power-bi-and-azure) to create a capacity if needed.
    * **Azure subscription**: An active Azure subscription is required.
    * **Azure owner role**: Assign yourself the "Owner" role in the Azure subscription for full permissions.
    * **Resource group in Azure**: Create a resource group within the Azure subscription where all related resources will be deployed.


2. Set up the Integrated Development Environment (IDE):
   * **IDE or text editor**: It's recommended to use Visual Studio Code (VS Code) for its support of Bicep syntax and development experience.
   * **Bicep development environment**: Set up an environment for working with Bicep scripts.
   * **Windows PowerShell**: Install Windows PowerShell for executing deployment scripts.
   * **Windows PowerShell Extension**: Install the PowerShell Extension in VS Code for script execution.
   * **Bicep CLI**: Install the Bicep Command-Line Interface tool for working with Bicep files.
   * **Azure CLI**: Install the Azure Command-Line Interface for executing Azure commands in PowerShell.
   * **PowerShell configuration**: Configure PowerShell to install Azure and SQL-related modules.

For detailed information and step-by-step guidance on these prerequisites, please refer to our [technical documentation](https://maqsoftware.gitbook.io/embed-fast-technical-documentation/setting-up/prerequisites/set-up-power-bi-and-azure).

&#x20;

**Are there any data privacy or compliance considerations?**

We strictly adhere to the details listed in our [Privacy Statement](https://maqsoftware.com/privacystatement). This includes not storing any Personally Identifiable Information (PII) as it is held in the customer's tenant. Although data privacy protection is not enabled by default, we strongly advise the use of encryption and masking for PII columns. This approach provides an extra security layer and ensures compliance with applicable data privacy laws. Encrypting and masking sensitive data mitigates the risk of unauthorized access and helps meet data protection regulations.&#x20;

