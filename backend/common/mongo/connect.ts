import mongoose from 'mongoose';
import logger from '../utils/logger.util';
import dotenv from 'dotenv';

dotenv.config();

export default class ConnectMongo {
  MONGO_URI: string;
  constructor() {
    this.MONGO_URI =
      process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
  }

  connect = () => {
    mongoose
      .connect(this.MONGO_URI)
      .then(() => logger.info('Connected to MongoDB'))
      .catch((error) => logger.error(error, 'Error connecting to MongoDB:'));
  };
}
