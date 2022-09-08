const { Router } = require('express');
const { register } = require('../controllers/auth');
const { validatorRegister } = require('../validators/auth');

const router = Router();

//url -> http://localhost:4000/api/register
router.post('/register', validatorRegister, register);

module.exports = router;