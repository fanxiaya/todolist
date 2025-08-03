import  { Router } from "express";
import { checkSchema } from "express-validator";
import registerSchema from "../schema/registerSchema.mjs";
import { checkUser, getToken } from "../middleware/userMiddleware.mjs";
import { userLogin, userRegister } from "../controller/userController.mjs";
import { getUserIdentification } from "../service/userService.mjs";
const userRouter = Router();

userRouter.post('/register', checkSchema(registerSchema), userRegister)
userRouter.post('/login', checkUser, userLogin)

userRouter.get('/me', getToken, getUserIdentification)

export default userRouter;