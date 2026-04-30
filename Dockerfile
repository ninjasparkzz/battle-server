FROM node:16-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Move back to late 2015 (The original Gen 6 era)
RUN git clone https://github.com/smogon/pokemon-showdown.git . && \
    git checkout d7a5b3a

# Install only the basic needs
RUN npm install --production

# This version is so old it doesn't need "node build"!
EXPOSE 10000

# The command is also simpler for this version
CMD ["node", "pokemon-showdown", "10000"]
