FROM node:18-alpine
WORKDIR /

EXPOSE 3000

COPY ["./package.json", "./package-lock.json", "./"]
RUN npm i
COPY ./ .

CMD [ "npm", "start" ]