const Product = require('../models/Product');

const getAllProducts = async (res, req) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server ERROR"});
    }
}

const getProductById = async (res, req) => {
    try {
        const products = await Product.findById(req.params.id);

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server ERROR"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
}