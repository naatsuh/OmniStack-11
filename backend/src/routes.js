const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();
/* Login ONG's*/
routes.post('/sessions', SessionController.create);

/* ONG's Criar e Lista */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/*ONG's Profile*/
routes.get('/profile', ProfileController.index);

/* Casos Criar e lista */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;