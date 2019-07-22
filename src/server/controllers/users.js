const User = require('../models/user');

const findUser = async (req, res) => {
  const _id = req.params.id;
  const filter = _id && _id.length ? { _id } : {};
  await User.find(filter, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save((err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  await User.findByIdAndUpdate(id, user, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

module.exports = { findUser, createUser, deleteUser, updateUser };
