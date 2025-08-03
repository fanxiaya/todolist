import findUserByUserMessage from "../utils/collectionUtils.mjs";
import logger from "../logger/logger.mjs";

export const getUserIdentification = async (request, response) => {
    const { email, password } = request.userMessage;
    const userMessage = { email, password };
    try {
        const user = await findUserByUserMessage(userMessage);
        return response.status(200).json(user)
    } catch (error) {
        logger.error({ error });
    }
}