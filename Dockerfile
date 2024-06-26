FROM node:20-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
RUN ls -la /app
RUN node server.js
