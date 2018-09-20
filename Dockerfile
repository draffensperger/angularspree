FROM node:10-stretch

RUN npm install -g node-static

ENV HOME=/home/app
WORKDIR $HOME

COPY dist/browser/* ./

WORKDIR $HOME/$APP_NAME/dist

ENTRYPOINT ["static"]
CMD ["--port", "8080"]
