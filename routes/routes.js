const appRoutes = require('express').Router();
const userRoutes = require('express').Router();

const indexCtrl = require('../controller/index');
const userCtrl = require('../controller/user');

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

      /** userRoutes defination begin **/
      userRoutes.route('/')
                .get(userCtrl.getAllUser);

      userRoutes.route(':userId')
                .get(userCtrl.getUserById)
                .patch(userCtrl.patchUser)
                .delete(userCtrl.deleteUser);

      userRoutes.route('/signup')
                .post(userCtrl.signupUser);

      userRoutes.route('/login')
                .post(userCtrl.loginUser);
      /** userRoutes defination end **/
}

// module.exports = routes;