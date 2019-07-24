const mongoose = require('mongoose');
const regEx = '^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]{2,7}(.[a-zA-Z]{2})?$';

const { Schema } = mongoose;

const userSchema = new Schema({
  document: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  secondName: { type: String, required: true },
  dateBorn: { type: Date, required: true },
  email: { type: String, required: true, match: new RegExp(regEx) },
  user: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'E' },
});

module.exports = mongoose.model('user', userSchema);
