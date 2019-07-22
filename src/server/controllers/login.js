const User = require('../models/user');

const login = async (req, res) => {
  const { user, password } = req.body;
  await User.find({ user, password }, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

module.exports = { login };
