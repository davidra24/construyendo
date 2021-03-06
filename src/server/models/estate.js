const mongoose = require('mongoose');

const { Schema } = mongoose;

const estateSchema = new Schema({
  //V => Venta, A => Arriendo
  option: { type: String, required: true, enum: ['V', 'A'] },
  //L => Lote, C => Casa, A => Apartamento
  property: { type: String, required: true, enum: ['L', 'C', 'A'] },
  location: { type: String, required: true },
  zone: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  images: { type: Array, default: [] }
});

module.exports = mongoose.model('estate', estateSchema);
