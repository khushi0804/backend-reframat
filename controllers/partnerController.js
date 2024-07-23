import db from '../models/db.js';

const getAllPartners = (req, res) => {
    const sql = 'SELECT * FROM partners';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
};

const getPartnerById = (req, res) => {
    const sql = 'SELECT * FROM partners WHERE id = ?';
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result[0]);
    });
};

export { getAllPartners, getPartnerById };


