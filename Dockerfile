FROM nginx:alpine

# Sett arbeidskatalogen til Nginx sin dokumentrot
WORKDIR /usr/share/nginx/html

# Kopier ALLE filer fra den nåværende katalogen til Nginx sin dokumentrot
COPY . .

# Eksponer port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]