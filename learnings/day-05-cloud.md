# Day 5 Learning - Cloud & Docker

## What is a Container?

A container is a lightweight package that contains an application along with everything it needs to run, such as libraries, dependencies, and configuration files. Since everything is packaged together, the application behaves the same on every computer or server.

---

## What is the Cloud?

Cloud computing means using computers and servers over the internet instead of running everything on our own machine. Companies like AWS, DigitalOcean, Microsoft Azure, and Google Cloud provide these servers.

Benefits include:

- Easy deployment
- Scalability
- High availability
- Reduced hardware cost
- Access from anywhere

---

## How Docker Helps

Docker creates a container that packages the application with all its dependencies.

Without Docker:

- "It works on my machine" problems occur.

With Docker:

- The application works the same everywhere.

---

## How Our Application Gets Deployed

The deployment process follows these steps:

1. Developer writes code.
2. Code is pushed to GitHub.
3. Docker builds a Docker image.
4. The image is uploaded to a Docker Registry.
5. DigitalOcean downloads the image.
6. Kubernetes starts one or more containers.
7. Users can access the application through a website.

Flow:

Code → Docker → Docker Registry → Kubernetes → Live Application

---

## What I Learned Today

- A container packages an application and its dependencies.
- Docker creates and runs containers.
- The cloud provides servers over the internet.
- Docker images are stored in a registry.
- Kubernetes manages containers and keeps applications running.
- DigitalOcean can host applications in the cloud.