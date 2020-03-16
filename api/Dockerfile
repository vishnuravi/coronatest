FROM node:alpine

RUN apk update
RUN apk add bash vim

ARG node_env_var=production
ENV NODE_ENV $node_env_var

ENV DB_ENV live
ENV PORT 3000

EXPOSE 3000

RUN mkdir /opt/app
WORKDIR /opt/app

COPY ./package.json /opt/app
RUN npm install
COPY . /opt/app