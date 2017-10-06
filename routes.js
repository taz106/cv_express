const routes = require('express').Router();

const indexCtrl = require('./controller/index');
const userCtrl = require('./controller/user');

routes.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

routes.route('/').get(indexCtrl);

// <<   declaring route for User 
routes.route('/user')
      .get(userCtrl.getAllUser)

routes.route('/user:userId')
      .get(userCtrl.getUserById)
      .patch(userCtrl.patchUser)
      .delete(userCtrl.deleteUser);

routes.route('/user/signup')
      .post(userCtrl.postUser);

//   >>

module.exports = routes;