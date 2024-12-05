const mongoose = require("mongoose");

const cold_drinksSchema = new mongoose.Schema({
    head : {
        type:String
    },

    details:{
        type : String
    },

    price:{
        type:Number
    }
})

const Cold_drinksInfo = new mongoose.model("Cold_drinksInfo", cold_drinksSchema);

module.exports = Cold_drinksInfo;