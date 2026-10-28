const express = require('express');
const router = express.Router();
const { createCategory, getCategories, getCategory } = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');

router.route('/')
  .get(getCategories)
  .post(protect, validate(['name']), createCategory);

router.route('/:id')
  .get(getCategory);

module.exports = router;