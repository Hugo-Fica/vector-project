# vector-project
---Pendientes---
[] Al inicar sesion enviar al usuario al HOME
[] Validaciones del los status(CHECKING, AUTHENTICATED, NOT-AUTHENTICATED)
    [] Si es CHECKING bloquear botones para evitar dobles peticiones
    [] Si es AUTHENTICATED permitir realizar peticiones con el TOKEN recibido desde API
    [] Si es NOT-AUTHENTICATED bloquear acceso a las rutas de la app y enviar a inicar sesion
[] Mejorar inputs para agregar vectores
    [] Crear vector dentro de la app
    [] Listar vectores creados
    [] Eliminar valores del vector, al eliminar vector por su ID (ENDPOINT RestServer)
    [] Crear botones para CREAR, MODIFICAR, ELIMINAR datos del vector
    [] Al guardar datos del vector sumar a la posicion 47
    [] Crear boton para MODIFICAR y ELIMINAR, valor y periodo
[] Finalizar DRAG-AND-DROP
    [] Colocar titulos a columnas(NOMBRE DEL VECTOR-PERIODO)
    [] Mostrar datos en la tabla
    [] Modificar posicion al arrastrar
    [] Generar calculo al obtener la posicion
    [] Mostrar resultados del calculo
   ?[] Guardar resultados + titulo del resultado
   ?[] Crear MODEL, CONTROLLER, ROUTER para el resultado(RESTSERVER)
   ?[] Mostrar seccion con resultados
   ?[] Crear ENDPOINT para realizar las peticiones GET, POST, PUT, DELETE
