import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  homeAddress: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  langues: {
    type: String,
    required: true
  },
  medicalCondition: {
    type: String,
    required: true
  },
  

});

export default mongoose.model('User', userSchema);