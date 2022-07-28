var express = require('express');
var productRouter = express.Router();
var {
    postProduct,
    getProduct,
    deleteProduct,
    updateProduct
} = require('../controller/product')

productRouter.route('/')
.post(postProduct)
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)

module.exports = productRouter;