import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const mongoose_key = process.env.MONGODB_CONNECTION;
const connectToMongodb = () =>{
mongoose.connect(mongoose_key,() => {
    console.log("mongodb is been connected");
})
}

export default connectToMongodb;

// admin

// mMZ3nOD2UhRb4Y2D