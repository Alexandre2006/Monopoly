FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Explicitly create .svelte-kit directory and generate types
RUN npx svelte-kit sync

# Build the application
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

# Install production dependencies
RUN npm ci --omit=dev

# Set environment to production
ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80

CMD ["node", "build"]