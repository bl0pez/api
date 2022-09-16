const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

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

//Se ejecuta antes de guardar un usuario
userSchema.pre('save', async function (next){

    //Verifica si la password ya esta encriptada
    if(!this.isModified('password')){
        return next();
    }

    //Encripta la password
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);

});

//Ocultar password
userSchema.methods.toJSON = function(){
    const { password, ...user } = this.toObject();
    return user;
}

module.exports = model('User', userSchema);