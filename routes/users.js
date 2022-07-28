var express = require('express');
var userRouter = express.Router();

var {
    signup,
    login
} = require('../controller/user')

userRouter.route('/signup')
.post(signup)

userRouter.route('/login')
.post(login)

module.exports = userRouter;