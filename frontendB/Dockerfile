# Use an official node image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies with --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses
EXPOSE 7101

# Start the Vite server
CMD ["npm", "start"]
