# Journal - Day 5

Today I learned the basics of cloud computing and Docker.

I understood the difference between running an application locally and deploying it to the cloud.

I learned how Docker packages an application into a container, making it run consistently across different environments.

I also learned the deployment flow used by Tech Arion:

Code → Docker → Docker Registry → Kubernetes → DigitalOcean → Live Application.

This helped me understand how applications move from development to production.

What was hard

The hardest part for me was understanding the difference between a Docker image and a Docker container. At first, they sounded like the same thing. After watching the video and reading more, I understood that an image is the blueprint, while a container is a running instance created from that image.I also found Kubernetes a little confusing because I have not yet worked with multiple containers or a real cloud deployment.

One question I still have

If a new version of an application is released, how does Kubernetes update the running containers without causing downtime for users?