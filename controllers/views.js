const products = require('./product');

exports.getHome = (req, res, next) => {
    let prods = products.products();

    let cats = () => {
        let list = []
        for (let p of prods) {
            if (!list.includes(p.category)) {
                list.push(p.category);
            }
        }
        return list;
    }

    res.render('index', { products: prods, categories: cats() });
}