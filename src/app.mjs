import express from 'express';
import dotenv from 'dotenv';
import logger from '../logger/logger.mjs';
import mongoose from 'mongoose';
import router from '../routes/route.mjs';

dotenv.config();

try {
    await mongoose.connect(process.env.MONGO_URI)
    logger.info('mongodb连接成功')
} catch (error) {
    if (error) logger.error({ error }, 'mongodb连接错误');    
    
}

const app = express();

app.use(express.json());
app.use('/api', router);


app.listen(process.env.PORT, (error) => {
if (error) {
    logger.error({error},'监听错误')
}    
    logger.info(`正在监听端口${process.env.PORT}`);
})

export default app;





