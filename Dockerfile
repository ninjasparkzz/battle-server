FROM node:20-slim
WORKDIR /app
COPY . .
# Using --no-optional and --no-audit to save RAM during build
RUN npm install --production --no-optional --no-audit
RUN node build
EXPOSE 10000
# Force-disabling subprocesses in the start command as a backup
CMD ["node", "pokemon-showdown", "start", "--no-security", "--port", "10000"]
