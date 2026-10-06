import Newsletter from '../models/Newsletter.js';

// @desc    Subscribe email to newsletter
// @route   POST /api/newsletter
// @access  Public
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email, source } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to the newsletter!',
        data: existing
      });
    }

    const subscriber = new Newsletter({
      email: normalizedEmail,
      source: source || 'website_footer'
    });

    await subscriber.save();

    return res.status(201).json({
      success: true,
      message: 'Subscribed successfully! Email saved to MongoDB.',
      data: subscriber
    });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while subscribing.'
    });
  }
};

// @desc    Get all newsletter subscribers
// @route   GET /api/newsletter
// @access  Public
export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
