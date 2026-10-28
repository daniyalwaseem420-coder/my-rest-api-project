const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Course title is required'] },
  description: { type: String, required: [true, 'Course description is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  instructor: { type: String, required: [true, 'Instructor is required'] },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);