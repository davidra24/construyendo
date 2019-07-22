require('dotenv/config');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
const mongoUrl = process.env.MONGODB_URI;
const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Error de conexión');
  } else {
    console.log('Conectado a base de datos');
  }
});

module.exports = db;
