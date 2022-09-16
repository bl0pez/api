const nodemailer = require('nodemailer');

const welcomeEmail = async (user) => {

    console.log(user);

    const {
        EMAIL_USER,
        EMAIL_PASS,
        EMAIL_HOST,
        EMAIL_PORT,
    } = process.env;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: false,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });
    try {
        let info = await transporter.sendMail({
            from: 'Prueba de envio de email',
            to: user.email,
            subject: 'Bienvenido a la aplicacion',
            text: `Hola ${user.name}, bienvenido a la aplicacion`,
            html: `<h1>Hola ${user.name}, bienvenido a la aplicacion</h1>`,
        });

    } catch (error) {
        console.log('Error_Email', error);
    }
}

module.exports = welcomeEmail;