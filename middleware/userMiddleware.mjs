import { check, checkSchema, validationResult } from "express-validator";
import UserModel from "../model/userModel.mjs";
import loginSchema from "../schema/loginSchema.mjs";
import logger from "../logger/logger.mjs";
import { verifyJWT } from "../utils/jwtUtils.mjs";

//拿到login请求时的request.body的邮箱和密码，找到collection里的对象后附到request.user上
 const checkUser = [
    checkSchema(loginSchema),
    async (request, response, next) => {
        const validationResults = validationResult(request);
        if (!validationResults.isEmpty()) {
            logger.error(validationResults, 'post请求体格式错误');
            return response.status(400).send('post请求体格式错误,请重新发送!');
        }

        const { email, password } = request.body;
        try {
            await UserModel.findOne({ email: email, password: password });
            request.userMessage = {email,password}

        } catch (error) {
            logger.error({ error }, '查找user时出现错误');
            response.status(400).send('没找到对应的注册用户！')
            
        }

        next();

    }
]

//获取token的中间件

 const getToken= async (request,response,next)=> {
    //拿到请求头里的token 解构出payload拿到user信息并返回
    if (!request.headers.authorization) {
        return response.status(400).json({ message:'无token值'})
    }
     const token = request.headers.authorization.split(' ')[1];
     
     try {
         const payload = await verifyJWT(token);
         request.userMessage = payload;
         logger.info({ payload });

    } catch (error) {
        logger.error({ error }, '验证token失败')
        return response.status(400).json({ message: '验证token失败' });
    }
    next();
}

 const globalErrorHandler = (err, _request, response, _next) => {
    
    const { name = '未知错误', message = '有bug!', statusCode = 500 } = err;
    response.status(statusCode).send(message);


}

export {getToken, checkUser,globalErrorHandler };