# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory for frontend
WORKDIR /app/client

# Copy package.json and install dependencies
COPY client/package.json ./
RUN npm install

# Copy rest of the frontend files and build the production version
COPY client/ ./
RUN npm run build

# Step 2: Build the Express backend
FROM node:18-alpine

# Install bun
# Install curl and bash
RUN apk add --no-cache curl bash

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Set PATH for bun (so it's available globally)
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory for backend
WORKDIR /app

# Copy package.json and install backend dependencies
COPY server/package.json ./
RUN npm install
# Copy backend source code
COPY server/ ./

# Copy the built React app from the previous stage into the backend's public folder
COPY --from=build /app/client/build ./public

# Expose the server port
EXPOSE 5055

# Run the Express app
CMD ["npm", "run", "start"]