const mongoose = require("mongoose");
const url = process.env.URL

async function dbConnect() {
    await mongoose.connect(url)
    .then((result)=>{
        console.log(`Database Connected Successfully`)
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

module.exports = dbConnect;