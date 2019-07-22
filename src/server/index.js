const express = require('express');
const path = require('path');
require('./drivers/mongo-connection');
const bundle = '../../dist/index.html';
const api = require('./api/api');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use('/api', api);

app.get('*', (req, res) => {
  const index = path.join(__dirname, bundle);
  res.sendFile(index);
});
