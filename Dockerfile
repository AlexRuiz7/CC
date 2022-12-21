FROM node:18.12.1-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm ci

# Copy source code
COPY . /app/

# Run tests
ENTRYPOINT ["npm", "test"]
