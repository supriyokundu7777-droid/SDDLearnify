import express from 'express';
import { submitEnrollment, getAllEnrollments } from '../controllers/enrollController.js';

const router = express.Router();

router.post('/', submitEnrollment);
router.get('/', getAllEnrollments);

export default router;
