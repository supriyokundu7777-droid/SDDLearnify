import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/authController.js';

const router = express.Router();

// Register / Create Account endpoints
router.post('/register', registerUser);
router.post('/signup', registerUser);
router.post('/create-account', registerUser);

// Login / Signin endpoints
router.post('/login', loginUser);
router.post('/signin', loginUser);

// Admin / verification endpoint
router.get('/users', getAllUsers);

export default router;
