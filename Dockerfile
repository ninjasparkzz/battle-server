FROM node:20-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the latest working version
RUN git clone https://github.com/smogon/pokemon-showdown.git .

# Automatically configure it for low RAM and Cloud hosting
RUN cp config/config-example.js config/config.js && \
    echo "exports.subprocesses = 0;" >> config/config.js && \
    echo "exports.workerprocesses = 0;" >> config/config.js && \
    echo "exports.permissiveproxy = true;" >> config/config.js && \
    echo "exports.noproxylookups = true;" >> config/config.js

# Install dependencies and build
RUN npm install --production
RUN node build

EXPOSE 10000

# Start with a strict 400MB memory limit so Render doesn't kill it!
CMD ["node", "--max-old-space-size=400", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
