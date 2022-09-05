const { body } = require('express-validator');
const validation = require('../helper/validator');

const validatorRegister = [
    body('email')
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
    validation
]

module.exports = {
    validatorRegister,
}