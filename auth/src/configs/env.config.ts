export const env = {
  APP: {
    SECRET_KEY: process.env.SECRET_KEY,
    GATEWAY: {
      PORT: +process.env.GATEWAY_PORT || 3000,
      HOST: process.env.GATEWAY_HOST || '127.0.0.1',
    },
    USER_SERVICE: {
      PORT: +process.env.USER_SERVICE_PORT || 3002,
      HOST: process.env.USER_SERVICE_HOST || '127.0.0.1',
    },
    AUTH_SERVICE: {
      PORT: +process.env.AUTH_SERVICE_PORT || 3001,
      HOST: process.env.AUTH_SERVICE_HOST || '127.0.0.1',
    },
  }
};
