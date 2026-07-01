import {Router} from 'express';
import { registerValidator,loginValidator } from '../validators/auth.validator.js';
import { RegisterController,LoginController } from '../controller/auth.controller.js';

const authRouter = Router();

authRouter.post("/sign-up",registerValidator,RegisterController);
authRouter.post("/sign-in",loginValidator,LoginController);

export default authRouter;