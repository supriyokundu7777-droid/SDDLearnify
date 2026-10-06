import Contact from '../models/Contact.js';

// @desc    Submit Contact Us form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res) => {
  try {
    const { fullName, email, subject, orderId, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Subject, Message).'
      });
    }

    const newContact = new Contact({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      orderId: orderId ? orderId.trim() : '',
      message: message.trim()
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted and saved to MongoDB!',
      ticketId: newContact.ticketId,
      data: newContact
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting contact message.'
    });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Public
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
