const mongoose = require("mongoose");


let addAddressSchema = new mongoose.Schema({
    address : {
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    }
})


let Addresse = new mongoose.model("Addresse", addAddressSchema)


module.exports = Addresse



















