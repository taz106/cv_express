const userRoutes = require('express').Router();

const userCtrl = require('../../controller/user');

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


module.exports = userRoutes;