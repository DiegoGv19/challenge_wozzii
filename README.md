# Challenge Wozzii


Realizado por: Diego Ernesto Guevara Valencia

Correo: diego_13_1999@hotmail.com

El proyecto esta realizado con React, Jsx, Sass y Firestore

---

## Aclaraciones

- Para dividir los componentes, utilize Atomic React.
- El HOC realizado permite mostrar al usuario una animacion de cargado para indicar que los datos ingresados se estran guardando o cargando.

- Todos los componentes dentro de la carpeta "Components", se realizaron con funciones de flecha

- El HOC es una funcion de flecha, que retorna una clase. Lo realice de esta forma debido a que no encontre dentro de la documentacion de React la forma en la que se pueda realizar con funciones de flecha en su totalidad. 

---

## Paginas creadas:


### Main:

Es la pagina principal donde se encutra el formulario. Todos los campos son requeridos, de olvidarce llenar o marcar uno de los capos este mostrar un mensaje de error debajo para que el usuario no tenga problemas.


### Confirmation

La pagina mostrara el mensaje de confirmacion una vez se guarden los datos en firestore. Miestras se hace el guardado, se mostrara una animación para indicar al usuario que se esta realizando el guardado de los datos.


### Error 

Si se busca una pagina inexistente, se mostrara esta pagina, la cual indica que la pagina que busca no se encuentra.

### Users

La pagina mostrar una tabla con todos los usuarios creados hasta el momento. Para acceder a esta pagina, se coloco un enlace en la parte de abajo de la confirmacion. El enlace dice "See users". Miestras se la consulta a firebase sobre los usuarios creados, se mostrara una animación para indicar al usuario que se esta realizando el guardado de los datos.


