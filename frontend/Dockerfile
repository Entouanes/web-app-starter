# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the frontend directory into the container
COPY . .

# Install dependencies from frontend/package.json
RUN npm install

# Expose the port the frontend will run on
EXPOSE 5173

# Run the application using npm run dev
CMD ["npm", "run", "dev", "--", "--port", "5173"]
