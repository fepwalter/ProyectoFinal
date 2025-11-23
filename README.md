# API Proyecto Final Producto

## Descripción
La API es parte de un proyecto final de curso. Tiene por finalidad el ABM de productos a inventariar por alguna tienda, ademas de manejar los errores de autenticación y de servidor, asi como tambien errores de ingreso de productos o actualizaciones erroneas.

## Installacion

1. Clonar el repositorio
2. Instalar dependencias

```shell
npm install
```

## Documentacion de la API

### Products Management (ABM)

#### GET ALL PRODUCTS

- **GET** `/api/products`
- **Descripcion:** Devuelve listado de los porductos almacenados
- **Respuestas de Ejemplo:**

```json
[
    {
        "id": "JDSkNWohIliUPNpBd1GO",
        "name": "Lapicera bic",
        "categorie": "Libreria",
        "price": 30
    },
    {
        "id": "NM7enixMzz2AXrQDOSGv",
        "name": "Monitor Samsung",
        "categorie": "Tecnologia",
        "price": 250000
    },
    {
        "id": "VCzoi4ko9Ljswjl46KGZ",
        "name": "Monitor Asus",
        "categorie": "Tecnologia",
        "price": 250000
    }
]
```
#### GET PRODUCT BY ID

- **GET** `/api/products/:id`
- **Descripcion:** Devuelve la informacion del producto consultado. En caso que no se ecnuetre el id, retorna:
```json
{
    "message": "Error retrieving product: No such product with ID: JDSkNWohIliUPNpB"
}
```
- **Respuestas de Ejemplo:**

```json
[
    {
        "id": "JDSkNWohIliUPNpBd1GO",
        "name": "Lapicera bic",
        "categorie": "Libreria",
        "price": 30
    }
]
```

#### CREATE PRODUCT

- **POST** `/api/products/create`
- **Descripcion:** Metodo para crear un nuevo producto. Recibe un body con el objeto completo.
- **Body:**

```json
{
    name:"nombre producto nuevo",
    categorie:"la categoria con la que se relaciona",
    price:10 (type number)
}
```
- **Respuestas de Ejemplo:**

```json
{
    "id": "H3n3wpWIS0NUaYmjNVs7",
    "name": "Televisor Hyndai Vb20",
    "categorie": "Tecnologia",
    "price": 3548150
}
```

#### DELETE PRODUCT

- **DELETE** `/api/products/:id`
- **Descripcion:** 
- **Respuestas de Ejemplo:**

#### UPDATE PRODUCT

- **PUT** `/api/products/:id`
- **Descripcion:** 
- **Respuestas de Ejemplo:**