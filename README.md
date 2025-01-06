<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Woods API

# Parte 1 - TypeORM (Postgres)

Levantar la base de datos e instalar dependencias:

```
docker-compose up -d
```
```
npm i @nestjs/config
```
```
npm i --save @nestjs/typeorm typeorm pg
```
```
docker exec -it woodsdb psql -U postgres
```
```
npm install class-validator class-transformer
```
```
npm i uuid
```
```
npm i --save-dev @types/uuid
```
```
npm i --save bcrypt
```
```
npm i --save @nestjs/passport passport
```
```
npm i --save @nestjs/jwt passport-jwt
```
```
npm i --save-dev @types/passport-jwt
```
```
npm run start:dev
```
```
npm i --save @nestjs/swagger
```

# Temas

1. TypeORM
2. Postgres
3. CRUD
4. Constrains
5. Validaciones
6. Búsquedas
7. Paginaciones
8. DTOs
9. Entities
10. Decoradores de TypeORM para entidades
11. Métodos BeforeInsert, BeforeUpdate

# Parte 2 - Relaciones en TypeORM

# Temas

1. Relaciones (De uno a muchos & Muchos a uno)
2. Query Runner
3. Query Builder
4. Transacciones
5. Commits y Rollbacks
6. Renombrar tablas
7. Creación de un SEED
8. Aplanar resultados

# Parte 3 - Autenticacion de autorizacion

# Temas 

1. Autenticación
2. Autorización
3. Json Web Tokens
4. Hash de contraseñas
5. Nest Passport
6. Módulos asíncronos
7. Protección de rutas
8. Custom Method Decorators
9. Custom Class Decorators
10. Custom Property Decorators
11. Enlazar usuarios con productos
12. Bearer Tokens

# Parte 4 - Documentacion (Open API)

# Temas

1. Postman documentation (https://documenter.getpostman.com/view/40218342/2sAYJ9AyRU)
2. Nest Swagger