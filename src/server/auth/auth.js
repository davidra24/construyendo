const express = require('express');
const auth = express.Router();
const bodyParser = require('body-parser');
const loginController = require('../controllers/login');

auth.use(bodyParser.json({ limit: '100mb' }));
auth.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
auth.use(bodyParser.urlencoded({ extended: false }));

auth.get('/login', loginController);

module.exports = auth;
