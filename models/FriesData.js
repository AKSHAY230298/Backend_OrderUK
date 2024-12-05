const mongoose = require("mongoose");

const friesSchema = new mongoose.Schema({
    head : {
        type:String
    },

    details:{
        type : String
    },

    price:{
        type: Number
    }
})

const FriesInfo = new mongoose.model("FriesInfo", friesSchema);

module.exports = FriesInfo