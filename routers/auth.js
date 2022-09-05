const { Router } = require('express');
const { register } = require('../controllers/auth');
const { validatorRegister } = require('../validators/auth');

const router = Router();

router.post('/register', validatorRegister, register);

module.exports = router;