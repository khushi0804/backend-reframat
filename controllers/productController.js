const db = require('../models/db');

const getAllProducts = (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getProductsByCategory = (req, res) => {
    let sql = 'SELECT * FROM products WHERE category = ?';
    db.query(sql, [req.params.category], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

module.exports = {
    getAllProducts,
    getProductsByCategory
};
