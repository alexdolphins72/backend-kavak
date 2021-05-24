const moongose = require('mongoose');
require('dotenv').config({path: 'var.env'});

const conectarDB = async () => {
    try {
        moongose.set('useCreateIndex',true);
        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Conexion correcta');
        
    } catch (error) {
        console.log(error);
        console.log("No se pudo conectar DB")
        process.exit(1);
    }
}

module.exports = conectarDB;