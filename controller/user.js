const userService = require('../service/user');

let user = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    signupUser: signupUser,
    patchUser: patchUser,
    deleteUser: deleteUser,
    loginUser: loginUser
}

function getAllUser(req, res) {
    console.log("getting all user");
    return res.send({"message":"success"});
}

function getUserById(req, res) {
    console.log(`getting user by ${req.param.id}`);
    return res.send({"message":"success"});
}

function signupUser(req, res) {
    console.log( "calling user post", req.body);
    userService.userSignup(req, res);
}

function patchUser(req, res) {
    console.log( "calling user patch", req.body);
    return res.send({"message":"success"});
}

function deleteUser(req, res) {
    console.log( "calling user delete", req.body);
    return res.send({"message":"success"});
}

function loginUser(req, res) {
    console.log('calling user login', req.body);
    return userService.userLogin(req, res);
}

module.exports = user;


