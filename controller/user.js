const userService = require('../service/user');

let user = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    postUser: postUser,
    patchUser: patchUser,
    deleteUser: deleteUser
}

function getAllUser(req, res) {
    console.log("getting all user");
    return res.send({"message":"success"});
}

function getUserById(req, res) {
    console.log(`getting user by ${req.param.id}`);
    return res.send({"message":"success"});
}

function postUser(req, res) {
    console.log( "calling user post", req.body);
    userService.userPost(req, res);
}

function patchUser(req, res) {
    console.log( "calling user patch", req.body);
    return res.send({"message":"success"});
}

function deleteUser(req, res) {
    console.log( "calling user delete", req.body);
    return res.send({"message":"success"});
}

module.exports = user;


