import logger from 'pino';

const transport = logger.transport({
  target: 'pino-pretty',
  options: { colorize: true, translateTime: 'yyyy-mm-dd HH:MM:ss.lO' },
});

export default logger(
  {
    base: {
      pid: false,
    },
  },
  transport,
);
