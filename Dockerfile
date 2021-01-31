FROM node:14.15.4

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000
#EXPOSE 9229

CMD [ "yarn" , "start" ]
