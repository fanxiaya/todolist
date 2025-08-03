import { Router } from "express";
import { checkSchema, validationResult,matchedData } from "express-validator";
import registerSchema from "../schema/registerSchema.mjs";
import logger from "../logger/logger.mjs";
import UserModel from "../model/userModel.mjs";
import checkUser from "../middleware/userMiddleware.mjs";
import { generateJWT } from "../utils/jwtUtils.mjs";
const todoRouter = Router();

