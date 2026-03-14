import {createUser,loginUser,getUserProfile,logoutUser} from '../controllers/user.controller.js';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/user.middleware.js';

import {Router} from 'express';
const router = Router();


router.post("/register",[
    body("fullname").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),

],createUser)
router.post("/login",[
        body("email").isEmail().withMessage("Valid email is required"),
],loginUser)
router.get("/profile",authMiddleware, getUserProfile)
router.get("/logout",logoutUser)

export default router;