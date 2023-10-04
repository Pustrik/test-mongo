export default class AppService {
  constructor() {}

  healthCheck = () => {
    return { health: true };
  };

  favicon = () => {
    return {};
  };
}
