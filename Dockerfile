FROM node:latest AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Generate the .svelte-kit directory first
RUN npm run sync
# Then build the application
RUN npm run build

FROM node:latest AS run

ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
# Install only production dependencies
RUN npm ci --production

EXPOSE 3000

CMD ["node", "build/index.js"]