
import express from 'express';
import { getAllPartners, getPartnerById } from '../controllers/partnerController.js';

const router = express.Router();

router.get('/partners', getAllPartners);
router.get('/partners/:id', getPartnerById);

export default router;
