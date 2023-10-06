export default class HealthService {
  constructor() {}

  healthCheck = () => {
    return { health: true };
  };

  favicon = () => {
    return {};
  };
}
