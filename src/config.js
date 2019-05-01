const environment = 'development';

const config = {
  development: {
    API_URL: 'http://api.cinema.jese.me/api/v1',
  },
  production: {
    API_URL: 'http://api.cinema.jese.me/api/v1',
  },
};

export default config[environment];
