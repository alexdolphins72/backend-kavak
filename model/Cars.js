const moongose = require('mongoose');
const moongosePaginate = require('mongoose-paginate-v2')

const CarsSchema = moongose.Schema({
    id_propietario:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    kilometraje:{
        type: Number,
        required: true,
        trim: true
    },
    marca:{
        type: String,
        required: true,
        trim: true
    },
    modelo:{
        type: String,
        required: true,
        trim: true
    },
    year:{
        type: Number,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim: true
    },
    transmision:{
        type: String,
        required: true,
        trim: true
    }

});

CarsSchema.plugin(moongosePaginate);

module.exports = moongose.model('Cars',CarsSchema);