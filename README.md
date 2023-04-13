# SKUvantage Assessment
This is my Vite (React + Typescript) project for the SKUvantage assessment that can be built and run in a Docker container.

## Prerequisites
Before building and running the Docker container, you need to have the following tools installed on your machine:
- Docker: https://docs.docker.com/engine/install/

## Building the Docker image
Open a terminal window and navigate to the root directory of your project.
Run the following command to build the Docker image:

```
docker build -t skuvantage-assessment-image .
```

This command will build a Docker image named "skuvantage-assessment-image" using the Dockerfile in the current directory.

## Running the Docker container
Run the following command to start a new container from the "skuvantage-assessment-image" image:

```
docker run -p 3000:3000 skuvantage-assessment-image
```

This command will start a new container from the "skuvantage-assessment-image" image and map port 3000 in the container to port 3000 on the host machine.

Once the container is running, open your web browser and navigate to http://localhost:3000 to access your Vite (React + Typescript) application.
