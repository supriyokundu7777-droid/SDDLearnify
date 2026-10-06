import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address'
      ]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters']
    },
    learningTrack: {
      type: String,
      default: 'Full-Stack Development'
    },
    role: {
      type: String,
      enum: ['Student', 'Pro Student', 'Lead Instructor', 'Admin'],
      default: 'Student'
    },
    avatar: {
      type: String,
      default: ''
    },
    initials: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// Hash password before saving if modified
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  
  if (!this.initials && this.fullName) {
    this.initials = this.fullName
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Safe user representation (omit password)
userSchema.methods.toSafeObject = function () {
  return {
    id: this._id,
    _id: this._id,
    fullName: this.fullName,
    name: this.fullName,
    email: this.email,
    learningTrack: this.learningTrack,
    role: this.role,
    avatar: this.avatar,
    initials: this.initials,
    createdAt: this.createdAt
  };
};

const User = mongoose.model('User', userSchema);
export default User;
