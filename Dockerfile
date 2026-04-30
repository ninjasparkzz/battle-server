FROM node:20-slim

WORKDIR /app

# Install git (this will definitely work on Node 20)
RUN apt-get update && apt-get install -y git

# Move back to late 2015 (The original Gen 6 era)
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout d7a5b3a

# Install basic needs
RUN npm install --production

# No build step needed!
EXPOSE 10000

# Start command
CMD ["node", "pokemon-showdown", "10000"]
