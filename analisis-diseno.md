# Proyecto 1 - Tópicos especiales en Telemática.
@author: Esteban Perez Noreña
@email: eperezn@eafit.edu.co

# Descripción de aplicación

Aplicación web que permite a un usuario registrarse y iniciar sesión.
Tambien permite mirar la ubicacion exacta de donde se encuentra en un mapa
de google maps.

  - Aplicación realizada con nodejs
  - Aplicación del patron MVC
  - Configuración de ambientes: Desarrollo, pruebas y producción

# 1. Análisis

## 1.1 Requisitos:
  
  - Registro de usuario
  - Inicio de sesión de usuario
  - Cierre de sesión de usuario
  - Obtener ubicación
  - Desplegar información en un mapa
  - Guardar ubicación
  - Historial de ubicación


## 1.2Definición de tecnología de desarrollo y despliegue para la aplicación:
    
  - Lenguaje de Programación: Javascript
  - Framework web backend: NodeJS - Express
  - Framework web frontend: Boostrap - Se utiliza como base template Jumbotron de los ejemplos de bootstrap
  - Base de datos: MongoDB
  - Web App Server: NodeJS
  - Web Server: NGINX

# 2. Desarrollo
  
  Se creo todo el directorio de carpetas desde el inicio

# 3. Diseño

# 3.1 Modelo de datos

  User:

  {usernamename: String, password: String, email: String}
 
  Location:

  {useremail: String, latitude: Number, longitude: Number, hour: String, date: String}

# 3.2 Servicios - web

/* Servicio Web: Crea un usuario en la base de datos Método: POST URI: /users/register */

/* Servicio Web: Autentica un usuario Método: POST URI: /users/login */

/* Servicio Web: Guarda una ubicación con su respectiva hora y fecha Método: POST URI: /map/saveLocation */

/* Servicio Web: Busca las ubicaciones que ha guardado un usuario Método: GET URI: /map/searchLocation?username=val */

/* Servicio Web: Verifica si un usuario esta logeado: GET URI: /users/principalPage */

/* Servicio Web: Cierra la sesión de un usuario: GET URI: /users/logout */

