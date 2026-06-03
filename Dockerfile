
# 1. Usamos una imagen ligera de Node
FROM node:22-alpine AS builder

# 2. Definimos el directorio de trabajo
WORKDIR /app

# 3. Copiamos los archivos de dependencias
COPY package*.json ./

# 4. Instalamos dependencias
RUN npm install

# 5. Copiamos el resto del código y construimos
COPY . .
RUN npm run build

# 6. Servimos con un servidor ligero (nginx)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]