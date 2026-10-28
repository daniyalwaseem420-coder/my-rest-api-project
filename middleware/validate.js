const validate = (fields) => {
  return (req, res, next) => {
    const missing = [];
    fields.forEach((field) => {
      if (!req.body[field] || req.body[field].toString().trim() === '') missing.push(field);
    });
    if (missing.length > 0) {
      return res.status(400).json({ success: false, message: `Missing required field(s): ${missing.join(', ')}` });
    }
    next();
  };
};

module.exports = validate;