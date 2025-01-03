<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Woods API

# Parte 1

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
npm run start:dev
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

# Parte 2

# Temas

1. Relaciones (De uno a muchos & Muchos a uno)
2. Query Runner
3. Query Builder
4. Transacciones
5. Commits y Rollbacks
6. Renombrar tablas
7. Creación de un SEED
8. Aplanar resultados