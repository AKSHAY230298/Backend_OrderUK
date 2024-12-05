const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name:{
        type:String
    },
    number:{
        type:String
    }
})

const Card = new mongoose.model("Card", cardSchema)

module.exports = Card
