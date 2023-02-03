import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://3.39.112.43:8080/api/v1',
});

export const testApi = {
  test: () => api.get('/test/hello', {}),
};
