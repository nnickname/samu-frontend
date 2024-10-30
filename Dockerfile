# Etapa de build
FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar la configuración personalizada de nginx si la tienes
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de build a nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
