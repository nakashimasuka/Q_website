FROM node:10.12

WORKDIR /usr/src/app

COPY . .

RUN npm install --quiet

EXPOSE 8000

CMD ["node", "index.js"]