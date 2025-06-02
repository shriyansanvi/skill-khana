const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  skills: [{ type: String }],
  credits: { type: Number, default: 0 },
  role: { type: String, default: 'learner' },  // or 'mentor' or both
  bio: { type: String },
  avatarUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
