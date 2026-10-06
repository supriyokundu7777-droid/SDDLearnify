import express from 'express';
import { subscribeNewsletter, getAllSubscribers } from '../controllers/newsletterController.js';

const router = express.Router();

router.post('/', subscribeNewsletter);
router.get('/', getAllSubscribers);

export default router;
