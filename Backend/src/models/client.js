const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    cellphone:{
        type: Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createAd:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('client',clientSchema);