import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import enrollRoutes from './routes/enrollRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: '*', // Allow frontend Vite dev server & any local origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logger for API calls
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api/auth', authRoutes);

// Direct aliases for convenience
app.use('/api/register', authRoutes);
app.use('/api/signup', authRoutes);
app.use('/api/login', authRoutes);
app.use('/api/signin', authRoutes);

app.use('/api/contact', contactRoutes);
app.use('/api/enroll', enrollRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.status(200).json({
    status: 'healthy',
    message: 'Learnify E-Learning Backend API is operational',
    database: {
      status: dbStatus,
      host: mongoose.connection.host || 'none',
      name: mongoose.connection.name || 'none'
    },
    timestamp: new Date().toISOString()
  });
});

// Root welcome endpoint
app.get('/', (req, res) => {
  res.send({
    message: '🎓 Learnify E-Learning Platform Backend API',
    endpoints: {
      auth_register: 'POST /api/auth/register (or /api/register)',
      auth_login: 'POST /api/auth/login (or /api/login)',
      contact_us: 'POST /api/contact',
      enrollment: 'POST /api/enroll',
      newsletter: 'POST /api/newsletter',
      health: 'GET /api/health'
    }
  });
});

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} not found.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Learnify Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 MongoDB Target: ${process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elearning_platform'}`);
});
