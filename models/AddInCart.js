const mongoose = require ("mongoose")

const addInCartSchema = new mongoose.Schema({
    head:{
        type : String,

    },
    price:{
        type : Number
    }


})

const Cart = new mongoose.model("Cart", addInCartSchema)

module.exports = Cart