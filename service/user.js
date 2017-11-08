const bcrypt = require('bcrypt');

const UserSchema = require('../model/user');

let user = {
    userSignup: userSignup,
    userLogin: userLogin
}

const saltRounds = 10;

function userSignup(req, res) {
    let newUser = new UserSchema(req.body);
    // console.log(newUser);
    UserSchema.find({ "email": newUser.email }).exec()
    .then(
        user => {
            if (user[0]) return res.send({ "status": 500, "message": "User Email Exist" });
            else bcrypt.genSalt(saltRounds)
            .then(
                salt => {
                    console.log("salt: ", salt);
                    return bcrypt.hash(newUser.password, salt);
                }
            )
            .then(
                hash => {
                    console.log("hash: ", hash);
                    newUser.password = hash;
                    return UserSchema.create(newUser);
                }
            )
            .then(
                user => {
                    console.log("User created: ", user);
                    return res.send(user);
                }
            )
            .catch(
                err => {
                    return res.send({ "status": 400, "errors": err["errors"] });
                }
            );
        }
    )
    .catch(
        err => {
            return res.send({ "status": 400, "errors": err["errors"] });
        }
    );
}

function userLogin(req, res) {
    let loginCred = req.body;
    UserSchema.find({ $or:[{"email":loginCred.usercred}, {"username":loginCred.usercred}] }).exec()
    .then(
        user => {
            console.log(user)
        }
    )
}

module.exports = user;