FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/smogon/pokemon-showdown.git .

# We added exports.port and exports.bindaddress to fix the 502 Error!
RUN cp config/config-example.js config/config.js && \
    echo "exports.port = 10000;" >> config/config.js && \
    echo "exports.bindaddress = '0.0.0.0';" >> config/config.js && \
    echo "exports.subprocesses = 0;" >> config/config.js && \
    echo "exports.workerprocesses = 0;" >> config/config.js && \
    echo "exports.permissiveproxy = true;" >> config/config.js && \
    echo "exports.noproxylookups = true;" >> config/config.js

RUN npm install --production
RUN node build

EXPOSE 10000

# Removed the broken port flag here, it is now safely in the config
CMD ["node", "--max-old-space-size=400", "pokemon-showdown", "start", "--no-security"]

