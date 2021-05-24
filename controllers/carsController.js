const Cars = require('../model/Cars');

exports.getCars = async (req,res) => {
    try {
        const options = { 
            limit : parseInt(req.query.limit,10) || 12,
            page : parseInt(req.query.page,10) || 1
        }
        const car = await Cars.paginate({},options);
        res.json({car});
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.filterCars = async (req,res) => {
    try {
        const options = { 
            limit : parseInt(req.query.limit,10) || 12,
            page : parseInt(req.query.page,10) || 1
        }

        const filterCar = {};

        if(req.query.marca){filterCar.marca = req.query.marca;}
        if(req.query.modelo){filterCar.modelo = req.query.modelo;}
        if(req.query.year){filterCar.year = req.query.year;}
        if(req.query.color){filterCar.color = req.query.color;}
        if(req.query.minPrecio && req.query.maxPrecio){filterCar.precio = {$gte:req.query.minPrecio, $lt:req.query.maxPrecio}}
        if(req.query.minKilometraje && req.query.maxKilometraje){filterCar.kilometraje = {$gte:req.query.minKilometraje, $lt:req.query.maxKilometraje}}
        if(req.query.transmision){filterCar.transmision = req.query.transmision;}
        
        const car = await Cars.paginate(filterCar,options);
        console.log(filterCar);
        res.json({car});

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.newCar = async (req,res) => {
    try {
        const car = new Cars(req.body);
        car.save();
        res.json({car})
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.updateCar = async (req,res) => {
    try {
        const car = await Cars.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json({car});
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.deleteCar = async (req,res) => {
    try {
        const car = await Cars.findByIdAndRemove({_id:req.params.id});
        if(!car){
            return res.json({msg: 'NO ENCONTRADO'});
        }
        res.json({car,msg: 'ELIMINADO'});
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}