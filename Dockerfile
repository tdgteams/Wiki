# Use a base image with Node.js
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy all files
COPY . .

# Install deps (uses package-lock.json or pnpm-lock.yaml if present)
RUN npm install

# Build TinaCMS (Next.js)
RUN npm --prefix my-tina-app run build-local

# Build Docusaurus
RUN npm run build

# Expose the port Docusaurus uses
EXPOSE 3232

# Start both services with concurrently
CMD ["npm", "run", "dev"]
