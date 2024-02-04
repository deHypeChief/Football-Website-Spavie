import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  legalNames: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  playingPosition: {
    type: String,
    required: true
  },
  homeAddress: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  countryOfBirth: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },

});

export default mongoose.model('User', userSchema);

// legal names
// Email
// phone number
// playing position
// home address
// birth Date
// county of birth
// language and nationality
// legal id international passport
// medical Condition
