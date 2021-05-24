const express = require('express');
const DB = require('./config/conexion');
const cors = require('cors');

const app = express();

app.use(cors());

DB();

app.use(express.json({extended:true}));

const port = process.env.PORT || 3002;

app.use('/api/cars', require('./routes/cars'));
app.use('/api/user', require('./routes/user'));

app.listen(port,'0.0.0.0',()=>{
    console.log(`Servidor en puerto ${port}`);
});