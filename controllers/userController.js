const User = require('../model/User');
const bcryptjs = require('bcryptjs');

exports.newUser = async (req,res) => {
    const { email, password } = req.body;
    try {
        let usuario = await User.findOne({email});
        if(usuario){
            return res.status(400).json({msg:'USUARIO EXISTENTE'});
        }
        usuario = new User(req.body);
        
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password,salt);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}