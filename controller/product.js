const Product = require('../model/product')

const postProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => {
        res.status(200)
        res.setHeader('Content-Type', 'Application/json')
        res.json(product)
    })
    .catch((err) => {
        console.log(err)
        res.send(err).status(500)
    })
}

const updateProduct = (req, res) => {
    name = req.body.name
    Product.findOneAndUpdate(
        name, 
        { $set: req.body},
        { new: true}
    )
    .then((product) => {
        res.status(200)
        res.setHeader('Content-Type', 'Application/json')
        res.json(product)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
}

const getProduct = (req, res) => {
    Product.find()
    .then((product) =>{
        res.status(200)
        res.setHeader('Content-Type','application/json')
        res.json(product)
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
}

const deleteProduct = (req, res) => {
    name = req.body.name
    Product.findOneAndDelete({name})
    .then((product) => {
        res.status(200)
        res.setHeader('Content-Type','application/json')
        res.json("Producet Deleted")
    })
    .catch((err) => {
        res.status(500)
        res.send(err)
    })
}

module.exports = {
    postProduct,
    updateProduct,
    getProduct,
    deleteProduct
}