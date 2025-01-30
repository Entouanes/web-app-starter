# Use node:18 as base image
FROM node:18

# Set working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package.json package-lock.json ./

# Run npm install to install dependencies
RUN npm install

# Copy all files to /app
COPY . .

# Expose port 5173
EXPOSE 5173

# Set command to run npm run dev
CMD ["npm", "run", "dev", "--", "--host"]
