FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Production stage
FROM node:22-alpine

WORKDIR /usr/src/app

# Install curl for healthchecks
RUN apk add --no-cache curl

# Copy only necessary files from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package*.json ./
COPY server.js .
COPY public ./public

# Set node environment to production
ENV NODE_ENV=production

EXPOSE 5050

# Run server
CMD ["node", "server.js"]