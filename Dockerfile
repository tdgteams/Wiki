FROM node:18-alpine

WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
COPY my-tina-app/package*.json ./my-tina-app/
RUN npm ci && npm --prefix my-tina-app ci

# Copy rest of the app
COPY . .

# Expose port used by Docusaurus (and optionally TinaCMS)
EXPOSE 3232 3000 4001

# Start both Docusaurus and TinaCMS dev servers
CMD ["npm", "run", "dev"]
