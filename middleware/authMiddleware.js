const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).send('No token provided');
  }

  try {
    jwt.verify(token, 'secret');
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
};

module.exports = {
  isAuthenticated
};
