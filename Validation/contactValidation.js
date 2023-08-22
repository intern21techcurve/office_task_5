const { body, validationResult } = require('express-validator');
const validateContact = [
    body('First').notEmpty().withMessage('First name is required'),
    body('Last').notEmpty().withMessage('Last name is required'),
    body('Email').isEmail().withMessage('Invalid email'),
    body('Phone').notEmpty().withMessage('Phone number is required'),
    body('Describe').notEmpty().withMessage('Description is required'),
    body('Message').notEmpty().withMessage('Message is required'),
  ];
  
  const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
  
  module.exports = {
    validateContact,
    handleValidationErrors,
  };