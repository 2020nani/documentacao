const { Router } = require('express')
const SwaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const SwagerDocs = YAML.load('./swagger.yaml')


const routes = new Router();
routes.use('/api-docs', SwaggerUi.serve)
routes.get('/api-docs', SwaggerUi.setup(SwagerDocs))

module.exports = routes;