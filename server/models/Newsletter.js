import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    source: {
      type: String,
      default: 'website_newsletter'
    }
  },
  {
    timestamps: true
  }
);

const Newsletter = mongoose.model('Newsletter', newsletterSchema);
export default Newsletter;
