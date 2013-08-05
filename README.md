Quais
=====

Web UI Manager for dokku made with Flask and Backbone

## How does it look like ?

![Like this](http://i.imgur.com/u5cGcp6.png)

## How to install ?

Right now, it's a bit tricky to install, but i'm planning on adding a docker image as soon as possible ! In the meantime, you can try to make it work for you as such:

* [Get docker](https://github.com/dotcloud/docker/)
* [Get dokku](https://github.com/progrium/dokku)
* Clone this repository on your machine, and push it to dokku
* Update your docker config so it will listen to its gateway adress (docker -H 127.0.0.1 -H 10.0.42.1). I'm trying to find a better way about this
* Find the folder where dokku stored Quais (probably /home/git/quais) and create a file ENV where you will write:
```
export DOCKER_HOST='http://10.0.42.1:42423'
```
* Restart the container ```docker ps -a``` then ``` docker start ID``` where ID is the quais container ID
* Enjoy !

I know instructions are a bit tricky, but I'm working on it, especially the Docker API access, stay tuned !
