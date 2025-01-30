# Use node:18 as the base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Run npm install to install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5173
EXPOSE 5173

# Set the command to run npm run dev
CMD ["npm", "run", "dev"]
