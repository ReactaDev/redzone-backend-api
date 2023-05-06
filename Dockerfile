FROM --platform=linux/amd64 node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=80
ENV DB_CONNECTION=mongodb+srv://admin:Woof2woof@redzonecluser0.nwjjasc.mongodb.net/?retryWrites=true&w=majority

EXPOSE 80

CMD [ "npm", "start" ]