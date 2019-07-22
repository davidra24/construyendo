const express = require('express');
const path = require('path');
require('./drivers/mongo-connection');
const api = require('./api/api');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use('/api', api);
