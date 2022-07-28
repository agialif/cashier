const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = (async(req, res) => {
    const nameExists = await User.findOne({name: req.body.name})
    if (nameExist) return res.status(400).json({error: "Name already exist"})

    const salt = await bcrypt.gensalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        password: hashPassword
    })
    try{
        const saveuser = await user.save();
        res.send(saveuser)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

const login = ((async) => {
    const user = await User.findOne({name: req.body.name})

    if(!user) {
        return res.status(401).json({error: "Name is wrong"})
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
        return res.status(401).json({error: "Password is wrong"})
    }

    const token = jwt.sign(
        {
            name: user.name,
            id: user._id, 
        },
        process.env.TOKEN_SECRET_MEMBER,
        {
            expiresIn: "24h"
        }
    )
    res.cookie("authCookie", token, {maxAge: 89304000, htpOnly:true}).json(
        {error: null,
        id: user.id,
        data: {
            token
        }}
    )
})

module.exporst = {
    signup,
    login
}