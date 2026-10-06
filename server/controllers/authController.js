import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'learnify_jwt_fallback_secret_key_2026';
  return jwt.sign({ id: userId }, secret, { expiresIn: '7d' });
};

// @desc    Register a new user / create account
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, learningTrack, role } = req.body;

    // Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, and password.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists. Please sign in instead.'
      });
    }

    // Create user in MongoDB
    const user = new User({
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
      learningTrack: learningTrack || 'Full-Stack Development',
      role: role || 'Student'
    });

    await user.save();

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: 'Account created and saved to MongoDB successfully!',
      user: user.toSafeObject(),
      token
    });
  } catch (error) {
    console.error('Register API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while registering user.'
    });
  }
};

// @desc    Authenticate user & get token (Sign in / Login)
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find user in MongoDB
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. No user found with this email address.'
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: user.toSafeObject(),
      token
    });
  } catch (error) {
    console.error('Login API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while logging in.'
    });
  }
};

// @desc    Get all users (for debugging & admin verification)
// @route   GET /api/auth/users
// @access  Public
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
