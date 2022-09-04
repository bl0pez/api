const express = require('express');
require('dotenv').config();
const dbConnection = require('./dataBase/config');

const app = express();

//Port
const PORT = process.env.PORT || 4000;


//Conexión a la base de datos
dbConnection();

//midelware
app.use(express.json());

//routes
app.use('/api', require('./routers/auth'));

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
});