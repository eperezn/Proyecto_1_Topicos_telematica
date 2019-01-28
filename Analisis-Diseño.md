# Proyecto_1_Topicos_telematica
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

## 1.2Definición de tecnología de desarrollo y despliegue para la aplicación:
    
  - Lenguaje de Programación: Javascript
  - Framework web backend: NodeJS - Express
  - Framework web frontend: Boostrap - se utiliza express-handlebars
  - Base de datos: MongoDB
  - Web App Server: NodeJS
  - Web Server: NGINX

# 2. Desarrollo
  
  No se uso ningun generador de directorios o del modelo MVC.

# 3. Diseño

# 3.1 Modelo de datos

  User:

  {name: String, password: String, email: String }


# 3.2 Servicios - web

/* Servicio Web: Verifica si un usuario esta logeado en la palicacion: GET URI: / */

/* Servicio Web: Devuelve en formato json los datos enviados en el body del mensaje: POST URI: /Home */

/* Servicio Web: Registro de usuarios : GET URI: /users/register */

/* Servicio Web: Inserta un nuevo usuario a la base de datos para luego ser dirigido al login de la aplicación: POST URI: /users/register */

/* Servicio Web: Autentifica usuarios anteriormente creados en el registro para darles paso a la ventana principal de la aplicación: GET URI: /users/login */

/* Servicio Web: Cierra la sesión de un usuario redirigiendolo automaticamente al login: GET URI: /users/logout */

#Basado en

https://github.com/st0263eafit/appwebArticulosNodejs/blob/master/analisis-diseno.md
