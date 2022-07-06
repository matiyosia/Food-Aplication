Objetivos del Proyecto

Construir una App utlizando React, Redux, Node y Sequelize.
Afirmar y conectar los conceptos aprendidos en la carrera.
Aprender mejores prácticas.
Aprender y practicar el workflow de GIT.
Usar y practicar testing.

Buscar recetas
Filtrarlos / Ordenarlos
Crear nuevas recetas propias
Tecnologías necesarias:

 React
 Redux
 Express
 Sequelize - Postgres
 CSS Puro
Frontend

CARACTERISTICAS:

Pagina inicial: deben armar una landing page con

Alguna imagen de fondo representativa al proyecto
 Botón para ingresar al home (Ruta principal)
 
 Ruta principal: debe contener

 Input de búsqueda para encontrar recetas por nombre
 Área donde se verá el listado de recetas. Deberá mostrar su:
Imagen
Nombre
Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
 Botones/Opciones para filtrar por por tipo de dieta
 Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por puntuación
 Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros
 
 Ruta de detalle de receta: debe contener

 Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
 Resumen del plato
 Puntuación
 Nivel de "comida saludable"
 Paso a paso
Ruta de creación de recetas: debe contener

 Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Resumen del plato
Puntuación
Nivel de "comida saludable"
Paso a paso
Posibilidad de seleccionar/agregar uno o más tipos de dietas
Botón/Opción para crear una nueva receta

El formulario de creación está validado con JavaScript y no sólo con validaciones HTML.
__Componentes de Not Found:

 Componentes para renderizar cuando no hay resultados de la búsqueda
No se encuentra receta ni id Se ingresa una ruta que no existe.

Tecnologías necesarias:

 PostgreSQL
CARACTERISTICAS:

El modelo de la base de datos tiene las siguientes entidades:

 Receta con las siguientes propiedades:
ID: *
Nombre *
Resumen del plato *
Puntuación
Nivel de "comida saludable"
Paso a paso
 Tipo de dieta con las siguientes propiedades:
ID
Nombre

Backend

Tecnologías necesarias:

 Node JS
 Express
 Sequelize
[ ]
CARACTERISTICAS:

GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
 GET /types:
Obtener todos los tipos de dieta posibles
 POST /recipe:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos
 
 
 
 
 
