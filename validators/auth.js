const { body } = require('express-validator');
const { existEmail } = require('../helper/db-validators');
const validation = require('../helper/validator');

const validatorRegister = [
    body('email')
        .isEmail()
        .withMessage('Email is not valid')
        .custom(existEmail),
    body('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
    validation
]

module.exports = {
    validatorRegister,
}