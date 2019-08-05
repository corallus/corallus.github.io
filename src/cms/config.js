import createConfig from './create-config';

const config = createConfig({
  backend: {
    name: 'github',
    branch: 'master',
    repo: '',
    base_url: 'https://infaxka6yj.execute-api.eu-central-1.amazonaws.com',
    auth_endpoint: '/prod/auth'
  },
});

export default config;