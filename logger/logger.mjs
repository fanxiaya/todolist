import pino from "pino";

const transport = pino.transport({
    targets: [
        { target: 'pino/file', level: 'error', options: { destination: './log/logfile.log', append: true } },
        { target: 'pino-pretty', options: { destination: 1, colorize: true }, }
    ]
})

const logger = pino(transport);
export default logger;