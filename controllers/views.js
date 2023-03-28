const products = require('./product');
const User = require('../models/user');

exports.getHome = async (req, res, next) => {
    try {
        let userId = req.params.userId;
        let prods = products.products();
        let user = await User.findOne({ userId: userId });

        res.render('index',
            { products: prods, current: 'main', categories: products.cats(), userId: userId, username: user.fullname, number: user.number });
    } catch (error) {
        console.log(error);
    }
}

exports.postHome = async (req, res, next) => {
    try {
        let data = req.params.category.split('+');
        let catName = data[0];
        let userId = data[1];
        // console.log(catName);
        let prods = products.someProducts(catName)
        let user = await User.findOne({ userId: userId });


        res.render('index', { products: prods, current: catName, categories: products.cats(), userId: userId, username: user.fullname, number: user.number });
    } catch (error) {
        console.log(error);
    }
}