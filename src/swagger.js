import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'API realizado con Node.js,mongo para la gestion de tareas',
    },
    servers: [
      {
        url: 'http://localhost:3100',
      },
    ],
  },
  apis: ['./swagger/tasks.js'],
};

const swaggerDocs = swaggerJsdoc(options)

export default swaggerDocs