FROM node:9.6.1

LABEL version="1.0"
LABEL description="App de tracjing GPS Proyecto 1"
LABEL maintainer="Esteban Perez Noreña - eperezn@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test
RUN npm install nodemon -g

EXPOSE 3000
CMD nodemon server.js
