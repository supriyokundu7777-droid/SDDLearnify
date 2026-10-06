import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    batchId: {
      type: String,
      default: 'summer-2026'
    },
    track: {
      type: String,
      default: 'Full-Stack Web Development'
    },
    experienceLevel: {
      type: String,
      default: 'Intermediate (1-3 years)'
    },
    githubProfile: {
      type: String,
      trim: true,
      default: ''
    },
    appliedScholarship: {
      type: Boolean,
      default: false
    },
    scholarshipReason: {
      type: String,
      trim: true,
      default: ''
    },
    admissionsRef: {
      type: String,
      unique: true,
      default: () => `ENR-${Math.floor(100000 + Math.random() * 900000)}`
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Waitlisted'],
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
);

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
export default Enrollment;
