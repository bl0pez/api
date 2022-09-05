const register  = (req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        message: `Su email es ${email} y su password es ${password}`
    });

}

module.exports = {
    register,
}