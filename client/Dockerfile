FROM node:12.11.1-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]