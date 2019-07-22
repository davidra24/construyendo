const Estate = require('../models/estate');

const findEstate = async (req, res) => {
  const _id = req.params.id;
  const filter = _id && _id.length ? { _id } : {};
  await Estate.find(filter, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

const createEstate = async (req, res) => {
  const estate = new Estate(req.body);
  await estate.save((err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};
const deleteEstate = async (req, res) => {
  const id = req.params.id;
  await Estate.findByIdAndDelete(id, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};
const updateEstate = async (req, res) => {
  const id = req.params.id;
  const estate = req.body;
  await Estate.findByIdAndUpdate(id, estate, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

module.exports = { findEstate, createEstate, deleteEstate, updateEstate };
