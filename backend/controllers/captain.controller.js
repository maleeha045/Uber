import CaptainModel from "../models/captain.model.js";
import { validationResult } from 'express-validator';

export const createCaptain = async (req, res) => {
    try {
         const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const { fullname, email, password, vehicle } = req.body;
        if (!fullname || !email || !password || !vehicle) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingCaptain = await CaptainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain already exists" });
        }
        const hashedPassword = await CaptainModel.hashPassword(password);
        const newCaptain = await CaptainModel.create({ fullname, email, password: hashedPassword,
            vehicle:{ 
            color: vehicle.color, plate: vehicle.plate, capacity: vehicle.capacity, 
            vehicleType: vehicle.vehicleType 
    }
});
        const token = await CaptainModel.generateToken(newCaptain);
        res.status(201).json({ captain: newCaptain, token });
    } catch (error) {
        res.status(500).json({ message: "Error creating captain", error });
    }
}

