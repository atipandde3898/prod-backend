import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
// const constants = require('../constants.js');


const connectDB= async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log(`\n Mongo db connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Monogo DB connection Error", error)
        process.exit(1)
    }
}

export default connectDB