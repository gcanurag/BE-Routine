# Use an official node image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

#
RUN npm run build

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses (default 5173)
EXPOSE 7101

# Start the Vite server
CMD ["npm", "start"]
