const Course = require('../models/Course');

exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) { next(error); }
};

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate('category');
    res.status(200).json({ success: true, data: courses });
  } catch (error) { next(error); }
};