import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
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
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true
    },
    orderId: {
      type: String,
      trim: true,
      default: ''
    },
    message: {
      type: String,
      required: [true, 'Message cannot be empty'],
      trim: true
    },
    ticketId: {
      type: String,
      unique: true,
      default: () => `TIC-${Math.floor(100000 + Math.random() * 900000)}`
    },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Resolved'],
      default: 'New'
    }
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
