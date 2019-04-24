const environment = 'development';

const config = {
  development: {
    API_URL: 'http://cinema-api.jese.me:3001/api/v1',
  },
  production: {
    API_URL: 'http://cinema-api.jese.me:3001/api/v1',
  },
};

export default config[environment];
