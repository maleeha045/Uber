import {createCaptain,loginCaptain,getProfileCaptain,logoutCaptain} from "../controllers/captain.controller.js";
import { body } from 'express-validator';
import captainAuthMiddleware from "../middlewares/captain.middleware.js";
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


router.post("/login",loginCaptain)
router.get("/profile",captainAuthMiddleware,getProfileCaptain)
router.get("/logout",logoutCaptain)

export default router;