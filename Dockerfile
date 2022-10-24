FROM node

COPY ["." ,"/usr/src"]

WORKDIR /usr/src/Fulvo

RUN npm install

CMD ["npm", "run", "start"]