const User = require("../models/User");

const register  = (req, res) => {

    const { name, email, password } = req.body;

    const user = new User({name, email, password});

    user.save()
        .then(user => {
            res.json({
                message: "Usuario creado correctamente",
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Internal server error",
            })
        });
}

module.exports = {
    register,
}