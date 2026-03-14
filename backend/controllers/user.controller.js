import UserModel from '../models/user.model.js';
// import usermodel from '../models/user.model.js';
import { validationResult } from 'express-validator';

export const createUser = async (req, res) => {
    try {
         const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const { fullname, email, password } = req.body;
   
        if(!fullname || !email || !password){
            throw new Error("All fields are required");
        }
       const existingUser = await UserModel.findOne({ email });
        if(existingUser){
            return res.status(400).json({ error: "User already exists" });
        }

        const newpassword = await UserModel.hashPassword(password);
        console.log(newpassword)
            const user = await UserModel.create({ fullname, email, password: newpassword });
            const token = await UserModel.generateToken(user);

            res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const loginUser = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        if(!email || !password){
            throw new Error("All fields are required");
        }
        
     
     const user = await UserModel.findOne({ email })
            
        if (!user) {
            return res.status(400).json({ error: "User don't exist" });
        }
       console.log(req.body)
        const isMatch = await UserModel.comparePassword(password,user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const token = await UserModel.generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
