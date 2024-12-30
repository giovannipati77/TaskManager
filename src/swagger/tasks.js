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

/* Método POST */
/**
 * @swagger
 * /api/addTask:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El título de la tarea (obligatorio).
 *               description:
 *                 type: string
 *                 description: La descripción de la tarea (opcional).
 *               completed:
 *                 type: boolean
 *                 description: Estado completado de la tarea (opcional).
 *                 default: false
 *               createdAt:
 *                 type: Date
 *                 default: Date.now
 *                 description: Fecha de creación de la tarea
 *             required:
 *               - title
 *     responses:
 *       201:
 *         description: Tarea creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID de la tarea creada.
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdAt:
 *                   type: Date
 *                   default: Date.now
 *               example:
 *                 _id: "64f8b6d83a74f12c9c1a82e3"
 *                 title: "Aprender Swagger"
 *                 description: "Documentar APIs con Swagger"
 *                 completed: false
 *                 createdAt: 2024-12-28T23:22:05.665+00:00
 *       400:
 *         description: Errores de validación en los datos proporcionados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error.
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Mensaje de error específico.
 *                       param:
 *                         type: string
 *                         description: Campo que generó el error.
 *                       location:
 *                         type: string
 *                         description: Ubicación del campo (body).
 *               example:
 *                 message: "Errores de validación."
 *                 errors:
 *                   - msg: "El título es obligatorio."
 *                     param: "title"
 *                     location: "body"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error.
 *                 error:
 *                   type: string
 *                   description: Detalles del error.
 *               example:
 *                 message: "Error interno del servidor al crear la tarea."
 *                 error: "Detalles técnicos del error."
 */

/* Método GET */
/**
 * @swagger
 * /api/taskUser:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID de la tarea.
 *                   title:
 *                     type: string
 *                     description: Título de la tarea.
 *                   description:
 *                     type: string
 *                     description: Descripción de la tarea.
 *                   completed:
 *                     type: boolean
 *                     description: Estado de la tarea.
 *                   createdAt:
 *                     type: Date
 *                     description: Fecha de creación de la tarea
 *       400:
 *         description: Error en los parámetros de consulta.
 *       500:
 *         description: Error interno del servidor.
 */
