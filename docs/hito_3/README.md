# Hito 2: Tests

En este hito se tiene como objetivo dockerizar la ejecución de los tests de la 
aplicación. 
Este entorno de ejecución de tests se desplegará contruirá y desplegará de forma 
automática en Docker Hub, fallando si los test no pasan, por lo que al mismo
tiempo estamos automatizando la ejecución de los tests.

Para cumplir con el hito, se requieren una serie de tareas, las cuales se han
listado en el issue https://github.com/AlexRuiz7/CC/issues/15

## Elección correcta y justificada del contenedor base

Se ha elegido la imagen `node.18.12.1-alpine`, por razones obvias. La aplicación y los tests corren en NodeJS y han sido desarrollados para la versión 18.12.1. No tendría sentido ejecutar los tests en una versión de NodeJS distinta a aquella en la que se desplegará la app.
Finalmente, la variante `alpine` corresponde a una imagen mínima, y, por tanto, más ligera que el resto de variantes. 

## Dockerfile

Se añade el `Dockerfile` en el commit https://github.com/AlexRuiz7/CC/commit/92c23f4aadba8f0c67f84f1949181a8c82dbc64e.

## Contenedor subido correctamente a Docker Hub y documentación de la actualización automática

La imagen de Docker ha sido subida a Docker Hub siguiendo la guía [How to build a Docker image and upload it to Docker Hub](https://www.techrepublic.com/article/how-to-build-a-docker-image-and-upload-it-to-docker-hub/)

![image](https://user-images.githubusercontent.com/15186973/208750583-cbf96bae-a455-452f-8570-58118cf17bbd.png)


Para la actualización automática de la imagen, se ha configurado un GitHub Action en el commit https://github.com/AlexRuiz7/CC/commit/09717203415e713f8da25e0da3b3cd4ec3db76b2, siguiendo la guía oficial para ello: [Publishing Docker images](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images).

La condición para que el workflow se ejecute de forma automática es publicar una release. Esta condición puede cambiarse a voluntad, usando cualquiera de los [eventos disponibles](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).

Aquí podemos ver como el Action se ha ejecutado correctamente, y que la imagen se ha subido a Docker Hub de forma automática.
![image](https://user-images.githubusercontent.com/15186973/208755660-08b2b99e-1787-4726-b032-39072952b8fd.png)
![image](https://user-images.githubusercontent.com/15186973/208755830-bc83b2c9-7306-4844-888b-94c55dc4db68.png)

