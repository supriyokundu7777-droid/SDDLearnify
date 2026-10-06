import Enrollment from '../models/Enrollment.js';

// @desc    Submit cohort admission enrollment application
// @route   POST /api/enroll
// @access  Public
export const submitEnrollment = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      batchId,
      track,
      experienceLevel,
      githubProfile,
      appliedScholarship,
      scholarshipReason
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Full Name, Email, Phone).'
      });
    }

    const enrollment = new Enrollment({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      batchId: batchId || 'summer-2026',
      track: track || 'Full-Stack Web Development',
      experienceLevel: experienceLevel || 'Intermediate (1-3 years)',
      githubProfile: githubProfile ? githubProfile.trim() : '',
      appliedScholarship: Boolean(appliedScholarship),
      scholarshipReason: scholarshipReason ? scholarshipReason.trim() : ''
    });

    await enrollment.save();

    return res.status(201).json({
      success: true,
      message: 'Enrollment application submitted and stored in MongoDB successfully!',
      admissionsRef: enrollment.admissionsRef,
      data: enrollment
    });
  } catch (error) {
    console.error('Enrollment API Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting enrollment application.'
    });
  }
};

// @desc    Get all enrollments
// @route   GET /api/enroll
// @access  Public
export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: enrollments.length,
      enrollments
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
