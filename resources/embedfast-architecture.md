# EmbedFAST architecture

## Architecture

<figure><img src="../.gitbook/assets/EmbedFAST architecture (1).png" alt=""><figcaption></figcaption></figure>

## Authentication and authorization

<figure><img src="../.gitbook/assets/EmbedFAST Authentication and Authorization image.png" alt=""><figcaption></figcaption></figure>

1. User login on ISV app using federated authentication
2. ISV app generates app + user access token using Service Principal 1
3. Make EmbedFAST API calls using app + user access token
4. EmbedFAST API validates access token
5. EmbedFAST API identifies user’s roles and permissions
6. EmbedFAST API generates embed token using Service Principal 2
7. Return embed token and data to ISV app for rendering

# EmbedFAST Report Scheduler Architecture

<figure><img src="../.gitbook/assets/EmbedFAST Report Scheduler Architecture.png" alt=""><figcaption></figcaption></figure>