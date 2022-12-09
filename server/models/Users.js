import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        min:[1,"Write a name please"]
    },
    email:{
        type: String,
        required: true,
        min:[5,"Write an Email please"]
    },
    password:{
        type: String,
        required: true,
        min:[4,"password should be of length more than 4"]
    }
})

export default mongoose.model("user",userSchema);

