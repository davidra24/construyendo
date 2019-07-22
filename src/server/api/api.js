const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
const estateController = require('../controllers/estates');
const userController = require('../controllers/users');

api.use(bodyParser.json({ limit: '100mb' }));
api.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
api.use(bodyParser.urlencoded({ extended: false }));

api.get('/users', userController.findUser);
api.post('/users', userController.createUser);
api.get('/users/:id', userController.findUser);
api.put('/users/:id', userController.updateUser);
api.delete('/users/:id', userController.deleteUser);

api.get('/estates', estateController.findEstate);
api.post('/estates', estateController.createEstate);
api.get('/estates/:id', estateController.findEstate);
api.put('/estates/:id', estateController.updateEstate);
api.delete('/estates/:id', estateController.deleteEstate);

module.exports = api;
