/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Api Tasks Coally
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: ID de la tarea
 *         title:
 *           type: string
 *           description: Título de la tarea
 *         description:
 *           type: string
 *           description: Descripción de la tarea
 *         completed:
 *           type: boolean
 *           description: Estado de la tarea (completada o no)
 *           default: false
 *         createdAt:
 *           type: Date
 *           default: Date.now
 *           description: Fecha de creación de la tarea
 *       example:
 *         _id: "64f8b6d83a74f12c9c1a82e3"
 *         title: "Swagger"
 *         description: "Documentar una API con Swagger"
 *         completed: false
 *         createdAt: 2024-12-28T23:22:05.665+00:00
 */

/* ENDPOINT POST */
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     description: Este endpoint permite crear una nueva tarea proporcionando un título obligatorio y opcionalmente una descripción y estado completado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El título de la tarea.
 *                 example: "Título de la nueva tarea"
 *               description:
 *                 type: string
 *                 description: La descripción de la tarea.
 *                 example: "Descripción detallada de la tarea."
 *               completed:
 *                 type: boolean
 *                 description: Estado inicial de la tarea, completado o no.
 *                 example: false
 *             required:
 *               - title
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               _id: "64fbc9c1c1e4ad7a5c9a1d4a"
 *               title: "Título de la nueva tarea"
 *               description: "Descripción detallada de la tarea."
 *               completed: false
 *               createdAt: "2024-10-05T15:00:00.000Z"
 *       400:
 *         description: Errores de validación en la solicitud.
 *         content:
 *           application/json:
 *             example:
 *               message: "Errores de validación."
 *               errors:
 *                 - msg: "El título es obligatorio."
 *                   param: "title"
 *                   location: "body"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error interno del servidor al crear la tarea."
 *               error: "Detalles del error."
 */


/* ENDPOINT GET */
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks] 
 *     description: Este endpoint devuelve una lista de todas las tareas almacenadas. Puedes filtrar las tareas por su estado de completado utilizando un parámetro de consulta opcional.
 *     parameters:
 *       - name: completed
 *         in: query
 *         required: false
 *         description: Filtrar tareas por su estado de completado. Acepta valores booleanos (`true` o `false`).
 *         schema:
 *           type: boolean
 *           example: true
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64fbc9c1c1e4ad7a5c9a1d4a"
 *                 title: "Título de la tarea"
 *                 description: "Descripción de la tarea"
 *                 completed: true
 *                 createdAt: "2024-10-01T12:00:00.000Z"
 *               - _id: "64fbc9c1c1e4ad7a5c9a1d4b"
 *                 title: "Otra tarea"
 *                 description: "Otra descripción"
 *                 completed: false
 *                 createdAt: "2024-10-02T10:00:00.000Z"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error al obtener las tareas."
 *               error: "Detalles del error."
 */

/* ENDPOINT PUT */
/**
 * @swagger
 * /tasks/:id:
 *   put:
 *     summary: Actualizar una tarea por ID
 *     tags: [Tasks]
 *     description: Este endpoint permite actualizar los detalles de una tarea existente proporcionando su ID y los datos a actualizar.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: El ID de la tarea que se desea actualizar.
 *         schema:
 *           type: string
 *           example: "64fbc9c1c1e4ad7a5c9a1d4a"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El nuevo título de la tarea.
 *                 example: "Nuevo título de la tarea"
 *               description:
 *                 type: string
 *                 description: La nueva descripción de la tarea.
 *                 example: "Descripción actualizada de la tarea."
 *               completed:
 *                 type: boolean
 *                 description: El estado completado de la tarea.
 *                 example: true
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               _id: "64fbc9c1c1e4ad7a5c9a1d4a"
 *               title: "Nuevo título de la tarea"
 *               description: "Descripción actualizada de la tarea."
 *               completed: true
 *               createdAt: "2024-10-01T12:00:00.000Z"
 *       400:
 *         description: Errores de validación en la solicitud.
 *         content:
 *           application/json:
 *             example:
 *               message: "Errores de validación."
 *               errors:
 *                 - msg: "El título debe ser una cadena de texto."
 *                   param: "title"
 *                   location: "body"
 *       404:
 *         description: La tarea no fue encontrada.
 *         content:
 *           application/json:
 *             example:
 *               message: "Tarea no encontrada."
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error interno del servidor al actualizar la tarea."
 *               error: "Detalles del error."
 */

/* ENDPOINT DELETE */
/**
 * @swagger
 * /tasks/:id:
 *   delete:
 *     tags: [Tasks]
 *     summary: Eliminar una tarea por ID
 *     description: Este endpoint permite eliminar una tarea específica proporcionando su ID.
 *     parameters:
 *       - name: id
 *         required: true
 *         description: El ID de la tarea que se desea eliminar.
 *         schema:
 *           type: string
 *           example: "64fbc9c1c1e4ad7a5c9a1d4a"
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               message: "Tarea eliminada exitosamente."
 *               task:
 *                 _id: "64fbc9c1c1e4ad7a5c9a1d4a"
 *                 title: "Ejemplo de tarea"
 *                 completed: false
 *                 createdAt: "2024-10-01T12:00:00.000Z"
 *       400:
 *         description: Errores de validación en la solicitud.
 *         content:
 *           application/json:
 *             example:
 *               message: "Errores de validación."
 *               errors:
 *                 - msg: "El id proporcionado no es válido."
 *                   param: "_id"
 *                   location: "params"
 *       404:
 *         description: La tarea no fue encontrada.
 *         content:
 *           application/json:
 *             example:
 *               message: "Tarea no encontrada."
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error interno del servidor al eliminar la tarea."
 *               error: "Detalles del error."
 */
