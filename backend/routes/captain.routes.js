import {createCaptain} from "../controllers/captain.controller.js";
import { body } from 'express-validator';

import {Router} from 'express';

const router = Router();

router.post("/register",[
    body("fullname").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vehicle.plate").notEmpty().withMessage("Vehicle plate is required"),
    body("vehicle.capacity").notEmpty().withMessage("Vehicle capacity is required"),
    body("vehicle.vehicleType").notEmpty().withMessage("Vehicle type is required"),
],createCaptain)



export default router;