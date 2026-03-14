import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true

     },
     socketio:{

     }
    })

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}
userSchema.statics.comparePassword = async function(password,hashPassword){
    return bcrypt.compare(password,hashPassword);
}
userSchema.statics.generateToken = async function(user){
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    return token

}
const UserModel = mongoose.model("User",userSchema);
export default UserModel;