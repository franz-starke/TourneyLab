FROM node:24-alpine AS build-stage

# Set working directory
WORKDIR /app

# Install dependencies
COPY src/frontend/package*.json ./
RUN npm install

# Build the app
COPY src/frontend .
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS production-stage

# Copy built files to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
