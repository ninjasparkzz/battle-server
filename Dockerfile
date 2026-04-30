FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all files
COPY . .

# Build the server
RUN node build

# Use Port 8080 for Back4App
ENV PORT=8080
EXPOSE 8080

# Start command: --no-security is key to bypassing proxy/login locks
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "8080"]
