const express = require('express');
const OngController = require('./controllers/OngController');
const IncidenteController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidenteController.index);
routes.post('/incidents', IncidenteController.create);
routes.delete('/incidents/:id', IncidenteController.delete);


routes.get('/profiles', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;

//developed by : Lucasmick