import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import logger from '../common/utils/logger.util';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
    },
    components: {},
    security: [],
  },
  apis: ['./src/common/routers/*.ts', './src/common/schemas/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, host, port) {
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at ${host}${port}/api`);
}

export default swaggerDocs;
