FROM node:latest

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Match this to your app's port
EXPOSE 5050

CMD ["node", "server.js"]