const { Product } = require('../models/product.model');


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}


module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}


module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}


module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(products => res.json(products))
        .catch(err => res.sjon(err));
}

module.exports.editProduct = (req,res)=> {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(editProduct => res.json(editProduct))
            .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res)=> {
    Product.deleteOne({_id: req.params.id})
            .then(deleteConfirmation => res.sjon(this.deleteConfirmation))
            .catch(err => res.json(err));
}
