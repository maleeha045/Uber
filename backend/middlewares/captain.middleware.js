
import jwt from "jsonwebtoken"
import CaptainModel from "../models/captain.model.js"
import BlacklistCaptainTokenModel from '../models/blacklistCaptainTokenModel.model.js';

const captainAuthMiddleware = async (req,res,next)=>{
    try {
        const token = req.cookies.token


        if (!token) {
            return res.status(401).json({ error: "Access denied." });
        }

        const isBlacklisted = await BlacklistCaptainTokenModel.findOne({ token });

        if(isBlacklisted){
            return res.status(401).json({ error: "Please log in again." })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await CaptainModel.findById(decoded.id);

        if(!captain){
            return res.status(401).json({ error: "Captain not found" })
        }

        req.user = captain;

        next();

    } catch (error) {
        res.status(401).json({ error: "Invalid token." });
    }
};

export default captainAuthMiddleware;