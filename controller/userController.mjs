import { generateJWT } from "../utils/jwtUtils.mjs";
import logger from "../logger/logger.mjs";
import { validationResult, matchedData } from "express-validator";
import UserModel from "../model/userModel.mjs";


//Post user登录 /login 的controller层方法
export const userLogin = async (request, response) => {
        //拿到request里的email和password（中间件已经封装到request.user里） 到数据库里找user 找到后返回token，以便其他请求，
        const { userMessage } = request;
        try {
            const token = await generateJWT(userMessage, '1h');
            return response.status(201).json({ token });
        } catch (error) {
            logger.error(error);
            response.send({ message: 'jwt生成失败' })
        }

}
    
//post user注册 /register 的controller层方法
export const userRegister = async (request, response) => {
    //发送注册请求
    const validationResults = validationResult(request);
    if (!validationResults.isEmpty()) {
        logger.error(validationResults, 'post请求体格式错误')
        return response.status(400).send('post请求体格式错误,请重新发送!')
    }
    const data = matchedData(request);

    try {
        // const user = await userModel.create({
        //     name: 'Bob',
        //     age: 30,
        //     email: 'bob@example.com',
        //     password: 'abcdef'
        //   });直接插入collection 不用.save()
        const newUser = new UserModel(data);//使用new mdoel() 生成user格式对象 并可以操作对应的collection
        await newUser.save();
    } catch (error) {
        logger.error({ error }, 'user对象未能保存至数据库')
        response.send({ message: '保存失败' })
    }
}
