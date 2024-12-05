const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
    head : {
        type:String
    },  details:{
        type : String
    },  price:{
        type: Number
    }
})

const BurgerInfo = new mongoose.model("BurgerInfo", burgerSchema);

module.exports = BurgerInfo