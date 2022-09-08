const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false // false = no eliminado, true = eliminado
    },
    token:{
        type: String // Recuperar contraseña
    }
}, {
    timestamps: true, // Guarda fecha de creacion y actualizacion
    versionKey: false // Desactiva versionKey
});

module.exports = model('User', userSchema);