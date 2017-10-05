const routes = require('express').Router();

const indexCtrl = require('./controller/index');
const userCtrl = require('./controller/user');

routes.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

routes.route('/').get(indexCtrl);

routes.route('/user')
      .all((req, res) => {
          userCtrl(req, res);
      });

module.exports = routes;