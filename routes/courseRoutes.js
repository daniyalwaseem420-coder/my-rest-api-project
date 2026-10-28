const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');

router.route('/')
  .get(getCourses)
  .post(protect, validate(['title', 'description', 'price', 'instructor', 'category']), createCourse);

module.exports = router;