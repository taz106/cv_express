const userService = require('../service/user');

let user = function(req, res) {
    let method = req.method;
    
    switch(method) {
        
        case "GET":
            getUser(req, res);
            break;
        case "POST":
            postUser(req, res);
    }

}

function getUser(req, res) {
    if (!req.param) getAllUser(res);
    else getUserById(req, res);
}

function getAllUser(res) {
    console.log("getting all user");
}

function getUserById(req, res) {
    console.log(`getting user by ${req.param.id}`);
}

function postUser(req, res) {
    console.log( "calling user post", req.body);
    userService.userPost(req, res);
}

module.exports = user;


