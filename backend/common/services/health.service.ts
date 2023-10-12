import dotenv from 'dotenv';
dotenv.config();
export default class HealthService {
  constructor() {}

  healthCheck = () => {
    return { health: true };
  };

  favicon = () => {
    const a = process.env.MONGO_URI;
    return { a };
  };
}
