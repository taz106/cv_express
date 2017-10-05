const UserSchema = require('../model/user');

let user = {
    userPost: userPost
}

function userPost(req, res) {
    let newUser = new UserSchema(req.body);
    console.log(newUser);
    UserSchema.create(newUser, (err, user) => {
        if(err)  return res.send({"status":400,"errors":err["errors"]});
        res.send(user);
    })
}

module.exports = user;