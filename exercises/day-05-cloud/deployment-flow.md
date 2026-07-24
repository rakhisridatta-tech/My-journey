# Day 5 - Cloud & Docker Basics

## How a Tech Arion App Goes from Code to Cloud

  text
Developer
    │
    ▼
Writes Code
(HTML/CSS/JS, React, Node.js, Python, etc.)
    │
    ▼
Git Commit
    │
    ▼
GitHub Repository
    │
    ▼
Docker Build
Creates a Docker Image
    │
    ▼
Docker Registry
(Docker Hub or Private Registry)
    │
    ▼
DigitalOcean Server
Pulls Docker Image
    │
    ▼
Kubernetes
Runs and manages containers
    │
    ▼
Application becomes Live
Users access through browser


## Explanation

1. A developer writes the application code.
2. The code is committed and pushed to GitHub.
3. Docker packages the application along with all dependencies into an image.
4. The Docker image is uploaded to a Docker Registry.
5. DigitalOcean servers download the image.
6. Kubernetes creates containers from the image.
7. Kubernetes keeps the application running, scales it when needed, and restarts failed containers.
8. Users can access the deployed application over the internet.