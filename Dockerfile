FROM node:alpine
ADD . /kubebot/
WORKDIR /kubebot/
RUN npm install
CMD ["node","server.js"]
