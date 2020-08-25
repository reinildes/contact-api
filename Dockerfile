FROM node
WORKDIR /opt/app
COPY . /opt/app
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
