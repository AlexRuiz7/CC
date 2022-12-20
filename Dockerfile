FROM node:18.12.1-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json package.json ./
RUN npm i

# Copy source code
COPY . .

# Run tests
ENTRYPOINT ["npm", "test"]
