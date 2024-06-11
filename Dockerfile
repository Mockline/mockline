# Étape de construction
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copie des fichiers de configuration nécessaires
COPY bun.lockb package.json ./
COPY apps/docs/package.json apps/docs/

# Installation des dépendances avec Bun
RUN bun install

# Copie du reste du code source de la documentation
COPY apps/docs apps/docs

# Construction de la documentation Nuxt
WORKDIR /app/apps/docs
RUN bun run build

# Étape de production
FROM oven/bun:1-alpine AS production

WORKDIR /app

# Copie des fichiers statiques générés lors de la construction
COPY --from=builder /app/apps/docs/.output /app

# Expose le port sur lequel le serveur Nuxt écoute
EXPOSE 3000

# Commande pour démarrer le serveur Nuxt en mode production
CMD ["bun", "run", "start"]
