# <L> Notes

## Índice

- [Preámbulo](#preámbulo)
- [Resumen del proyecto](#resumen-del-proyecto)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Consideraciones generales](#consideraciones-generales)
- [Hacker Edition](#hacker-edition)
- [Pistas & Tips](#pistas-&-tips)

## Preámbulo

![Shows CRUD functionalities](./demo-crud.gif)


No existe día que no tomemos notas, siempre necesitamos apuntar alguna dirección, número telefónico, algunos notas de alguna reunión, o hasta guardar nuestras URLs favoritas para  poder consultarlas más tarde. Muchas veces para esta actividad utilizamos libretas o agendas que terminan siendo olvidadas, se guardan en algún mensaje de texto o hasta terminando siendo escritas en la palma de nuestra mano.

Hoy en día la mayoría de la población cuenta con algún dispositivo mobile o laptop y además todos nos estamos preocupando por implementar acciones para salvar el medio ambiente, por ello a una Laboratorian se le ocurre la idea de implementar una  web app para tomar notas, que nos permita crearlas, editarlas, eliminarlas y consultarlas en cualquier momento.

Ella esta enamorada de la idea y quiere llevarla acabo, pero no tiene el tiempo necesario para empezar el proyecto ya que planea que sea un proyecto independiente a su trabajo, Por ello esta buscando dentro de la comunidad de Laboratoria para que implementen la idea, por lo cual te pedimos que la ayudes.


## Resumen del Proyecto

Para este proyecto necesitas crear una Web App con `React`, `Firebase` y `react-router`.

Si bien la temática es libre, tendrá que tener ciertas funcionalidades básicas:
* Puedo autenticarme con Correo y/o Google y/o Facebook.
* Puedo cerrar sesión.
* Puedo crear una nueva entrada/post
* Puedo ver mis entradas/posts
* Puedo editar mis entradas/posts
* Puedo borrar mis entradas/posts


Para este proyecto deberemos manejar `vistas`. Esto significa que cada sección tendrá su propia URL, la cual indica que `vista` o `componente` será mostrado en pantalla. Para ello necesitaremos investigar acerca de `react-router` y el concepto de `Single Page Application`.


## Objetivos de Aprendizaje

Este será nuestro primer proyecto utilizando la biblioteca de React. Por ello nos concentraremos en entender las bases de React, como `estado`, `ciclos de vida`, `componentes`, `render` y como mantener sincronizados el estado con la vista de nuestra interfaz.

## Consideraciones Generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en React.

La aplicación debe ser un Single Page Application.

La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

Implementar test unitarios incluyendo el porcentaje de coverage.

## Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del navegador se cierra, cuando vuelva a abrir esta, la nota debería mostrarse como estaba.
* Puedo ver el número de veces que he editado mi entradas/posts
* Puedo subir imágenes
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc)
* Progressive Web App (PWA)


# Pistas & Tips

* [Reactjs](https://reactjs.org/)
* [create-react-app](https://create-react-app.dev/docs/getting-started)
* [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [deploy con gh-pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [What is a Single Page Application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
