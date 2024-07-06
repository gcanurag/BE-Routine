# Dockerfile for Node.js Backend

# Use an official node image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 7102

# Define environment variable
ENV NODE_ENV production

# Start the app
CMD ["npm", "start"]
