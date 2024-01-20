// require('dotenv').config({path: '/.env'})

import mongoose from "mongoose";




import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000, ()=>{
      console.log(`Server is Running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo DB coonection Failed ", err)
})






/*
(async ()=> {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error) => {
        console.log("ERRR:   ");
        throw error
      } )

      app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
      })
    } catch (error) {
        console.error("ERROR ", error)
        throw error
    }
})()
*/