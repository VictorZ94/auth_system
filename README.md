# auth_system

How to set up this project

Docker file only

1. run: docker build to image named <mydjangoapp>

```bash
$ docker build -t mydjangoapp .
```

this command take the info into Dockerfile and build and image

Note: if you want to use docker compose don't run this command

2. for running it with docker compose

```bash
$ docker-compose up -d
```

docker compose build the image and contaiers
