import {createUser,loginUser} from '../controllers/user.controller.js';
import { body } from 'express-validator';

import {Router} from 'express';
const router = Router();


router.post("/register",[
    body("fullname").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),

],createUser)
router.post("/login",loginUser)

export default router;