import mongoose from 'mongoose';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const captainSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    socketId:{
        type: Number,

    },
    vehicle:{
        color:{
            type:String,
        required:true,
        },
        plate:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            required:true,
            minlength:1
        },
        vehicleType:{
            type:String,
            required:true,
            enum: ["car","bike","auto"],
            required:true
        }
    },
    location:{
        lan:{
            type:Number,

        },
        lon:{
            type:Number
        }
    }
});

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 12);
};
captainSchema.statics.comparePassword = async function(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
}

captainSchema.statics.generateToken = async function(captain) {
    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

const CaptainModel = mongoose.model('Captain', captainSchema);
export default CaptainModel;