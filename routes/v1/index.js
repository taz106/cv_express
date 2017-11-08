const appRoutes = require('express').Router();

const indexCtrl = require('../../controller/index');
const userRoutes = require('./user');

module.exports = (app) => {
      app.use((req, res, next) => {
            console.log(req.method, req.url);
            next();
      });

      /** Ping Route */
      app.get('/', indexCtrl);

      /** Initializing appRoutes with prefix '/api/v1' **/
      app.use('/api/v1', appRoutes);

      /** Initializing userRoutes **/
      appRoutes.use('/user', userRoutes);
}

// module.exports = routes;