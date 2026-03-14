import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"
import BlacklistUserTokenModel from '../models/blacklistUserToken.model.js';

const authMiddleware = async (req,res,next)=>{
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({ error: "Access denied." });
        }
        console.log(token)

        const isBlacklisted = await BlacklistUserTokenModel.findOne({ token });
console.log(isBlacklisted)
        if(isBlacklisted){
            return res.status(401).json({ error: "Token is blacklisted. Please log in again." })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await UserModel.findById(decoded.id);

        if(!user){
            return res.status(401).json({ error: "User not found" })
        }

        req.user = user;

        next();

    } catch (error) {
        res.status(401).json({ error: "Invalid token." });
    }
};

export default authMiddleware;