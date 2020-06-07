FROM node

COPY . /var/wwww

WORKDIR /var/wwww

RUN npm i

ENV NODE_ENV development

VOLUME /src/public/uploads /src/public/uploads

CMD ["npm", "start"]
