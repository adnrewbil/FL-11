function auth(req, res, next) {
    let auth = req.header('Authorization');
    if (auth == 'X-Password qwerty') {
      return next();
    } else {
      res.status(400).send('Please authorize to get access');
    }
  }
  module.exports = auth;