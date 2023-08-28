const { body, validationResult } = require('express-validator');
const validateContactUs = (req, res, next) => {

  const validationRules = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('Phone').notEmpty().withMessage('Phone number is required'),
  body('Email').isEmail().withMessage('Invalid Email'),
  body('Describe').notEmpty().withMessage('Description is required'),
  body('Message').notEmpty().withMessage('Message is required'),
]
Promise.all(validationRules.map((rule) => rule.run(req))).then(() => {

  const errors = validationResult(req);

  if (errors.isEmpty()) {

    next();

  } else {

    // Validation errors, return error response

    res.status(422).json({ errors: errors.array() });

  }

});

};
module.exports = {
  validateContactUs,
};