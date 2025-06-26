Dockerizing your React app and opening it at 127.0.0.1:8083

#say how to get here in the first place (configuring your project)
To start, navigate to your root directory for the project you want to dockerize (presumably this repository) and run this command:

docker build -t peters-hayley-ui-garden .

This will create an image from your Dockerfile. This image lays the foundation for a connection at 0.0.0.0:3000 . However, we don't want that. We also don't want the container to have a random name, so we'll enter this command to create the container:

docker run --name peters-hayley-coding-assignment12 -p 127.0.0.1:8083:3000 peters-hayley-ui-garden

It's pretty long, but it does exactly what we want it to. This command will allow you to run your dockerized React app on 127.0.0.1:8083 . Now you can open your Docker UI and open the port from there, or type 'localhost:8083' in your browser and your React app will pop up.

Happy coding!