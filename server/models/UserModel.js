import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'first name required'],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: [true, 'last name required'],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, 'email required'],
      max: 50,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail],
    },
    password: {
      type: String,
      required: [true, 'password required'],
      min: 8,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
