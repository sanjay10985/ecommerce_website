import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const mongoose_key = "mongodb+srv://admin:mMZ3nOD2UhRb4Y2D@cluster0.5o9l51r.mongodb.net/?retryWrites=true&w=majority";
const connectToMongodb = () =>{
mongoose.connect(mongoose_key,() => {
    console.log("mongodb is been connected");
})
}

export default connectToMongodb;

// admin

// mMZ3nOD2UhRb4Y2D