Dockerizing your React app and opening it at 127.0.0.1:8083

Download this respository, then open your command prompt in that file location. Once there, run this command:

docker build -t peters_hayley_ui_garden .

This will create an image from your Dockerfile. This image lays the foundation for a connection at 0.0.0.0:3000 . However, we don't want that. We also don't want the container to have a random name, so we'll enter this command to create the container:

docker run --name peters_hayley_coding_assignment12 -p 127.0.0.1:8083:3000 peters_hayley_ui_garden

It's pretty long, but it does exactly what we want it to. This command will allow you to run your dockerized React app on 127.0.0.1:8083 . Now you can open your Docker UI and open the port from there, or type 'localhost:8083' in your browser and your React app will pop up.

Happy coding!