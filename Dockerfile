FROM node:10-stretch

RUN npm install -g node-static

ENV HOME=/home/app
WORKDIR $HOME

COPY dist/browser/* ./

ENTRYPOINT ["static"]
CMD ["-a", "0.0.0.0", "-p", "8080"]
