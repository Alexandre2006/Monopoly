# ---- Base Node ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ---- Builder ----
FROM deps AS builder
COPY . .
RUN npm run build

# ---- Pruned Production Dependencies ----
FROM builder as prod-deps
RUN npm prune --production

# ---- Production ----
FROM base AS production
ENV NODE_ENV=production
COPY --from=prod-deps /app/package.json .
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["node", "build"]