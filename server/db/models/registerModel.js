import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phoneNo: {
    type: String,
    unique: true,
    required: true
  },
  foundUs: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', userSchema);