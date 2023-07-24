Sistema de Gestión de reservas y prestamos de Biblioteca Campus


Es un siste que facilita la gestion de reservas y de prestamos para tener un control mas detallado de los libros y de los usuarios con la finalidad de asegurar toda la informacion y llevar un informa mas detallado  
Requisitos

Para poder ejecutar y trabajar con este proyecto, asegúrate de tener instalado lo siguiente:

    Node.js: La versión recomendada es la 14.x o superior.

    TypeScript: Se utiliza TypeScript como lenguaje de programación para el desarrollo del proyecto.

    Librerías utilizadas

    : Asegúrate de tener las siguientes librerías instaladas, las versiones indicadas son las utilizadas en este proyecto:
        class-transformer@0.5.1
        dotenv@16.3.1
        express@4.18.2
        mysql2@3.5.1
        nodemon@3.0.1
        reflect-metadata@0.1.13
        typescript@5.1.6
        
        
 Importante
Antes de empezar a utilizar las diferentes rutas y endPoints debemosos generar un token de acceso, que debemos colocar en nuestro header/Autorization, este token tiene un limite de 4h, en ese rango de tiempo podremos acceder a las rutas y endPoints de nuestra Api.

para generar nuestro token, debemos acceder a nuestra extencion de visual estudio llamada Thunder-Client, colocar la siguiente ruta:
GET: http://"hostname":"port"/token/
por medio de la url 
http://127.10.10.10:5100/generateToken/123/nombre
##



uso 

gets 

http://127.10.10.10:5100/usuario trae todos los usuarios 
http://127.10.10.10:5100/reserva trae todas las reservas
http://127.10.10.10:5100/reserva/prestados trae todos los libros prestados 
http://127.10.10.10:5100/reserva/nombre { nombre : "Juan" apellido: "Pérez"} trae reservas por nombre de usuario
http://127.10.10.10:5100/reserva/confirmada trae las reservas confirmadas 
http://127.10.10.10:5100/libro
http://127.10.10.10:5100/estado-libro
http://127.10.10.10:5100/editorial
http://127.10.10.10:5100/categoria
http://127.10.10.10:5100/autor















