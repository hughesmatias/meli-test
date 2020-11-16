# Test Meli

## Api
Se implemento una api que response a busquedas y vistas detalle de un item.
Node + Express

### Endpoints

Para buscar N items que coincidan con tu query.
`/items?q=:query`
request -> query como query params del request.
response ->
```json
{
  "author": {
    "name": "string",
    "lastName": "string"
  },
  "items": [
    {
    "id":"String",
    "title":"String",
    "price":
      {"currency":"String","amount":"Number","decimals":"Number"},
      "picture":"String",
      "condition":"String",
      "free_shipping":"Boolean"
    },
    ...
  ]
}
```
Recordemos que devuelve hasta 4 items posibles.
Es posible ajustar este limite desde una variable de entorno denominada QUERY_SEARCH_LIMIT.

Para buscar un item especifico a partir de un id.
`/items/:id`
request -> id es parametro del request
response ->
```json
{
  "author": {
    "name": "string",
    "lastName": "string"
  },
  "item": {
    "id":"String",
    "title":"String",
    "price":
      {"currency":"String","amount":"Number","decimals":"Number"},
      "picture":"String",
      "condition":"String",
      "free_shipping":"Boolean"
    },
    ...
}
```

## App

Se construyeron las 2 vistas solicitadas.
Poder visualizar una busqueda, Listado de la misma.
Poder ver detalle de uno de los resultados de la busqueda.

#### Uso (NODE 12)

Modo desarrollo:
En el proyecto api y app -> usar npm install como cualquier proyecto node.

Correr la api y app con npm start.

### Docker
Cuenta con dockerfiles independientes. Es posible correr toda la app con docker-compose
