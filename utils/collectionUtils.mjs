import UserModel from "../model/userModel.mjs";
import logger from "../logger/logger.mjs";

const findUserByUserMessage = async function (userMessage) {
    const { email, password } = userMessage;

    try {
        const user = await UserModel.findOne({ email: email, password: password });
        return user.toObject();
    } catch (error) {
        logger.error({ error }, '查找user时出现错误');
    }
}

export default findUserByUserMessage;


