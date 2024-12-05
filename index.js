require('dotenv').config() 
const express = require("express")
const mongoose = require("mongoose")
const dbConnect = require("./config/db")
const app = express()
const port = process.env.PORT
const router = require ("./routes/userRoute")
const cors = require("cors")

const corsInfo = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD" ,
    credentials: true
}

app.use(cors(corsInfo))


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use("/api/auth/",router)
// app.use(cors(corsInfo)); // Enable CORS before defining routes

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/auth/", router);




app.listen(port, ()=>{
    console.log(`Server is Running on ${port}`);
    
})

dbConnect();