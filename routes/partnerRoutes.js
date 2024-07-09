const express = require('express');
const router = express.Router();
const { getAllPartners, getPartnerById } = require('../controllers/partnerController');

router.get('/partners', getAllPartners);
router.get('/partners/:id', getPartnerById);

module.exports = router;
