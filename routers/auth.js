const { Router } = require('express');
const { body } = require('express-validator');
const validation = require('../helper/validator');

const router = Router();

router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
        validation
],(req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        message: `Su email es ${email} y su password es ${password}`
    });

});

module.exports = router;