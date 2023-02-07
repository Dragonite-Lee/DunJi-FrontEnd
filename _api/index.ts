import axios from 'axios';
axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: 'http://3.39.112.43:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

function getCookie(cookie_name: string) {
  let x, y;
  const val = document.cookie.split(';');
  for (let i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf('='));
    y = val[i].substr(val[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    // 앞과 뒤의 공백 제거하기
    if (x == cookie_name) {
      return unescape(y);
      // unescape로 디코딩 후 값 리턴
    }
  }
}

api.interceptors.request.use(
  function (config) {
    const accessToken = getCookie('x-access-token');
    const refreshToken = getCookie('x-refresh-token');
    console.log('accessToken,refreshToken: ', refreshToken);

    if (accessToken && refreshToken) {
      config.headers.common['x-access-token'] = `${accessToken}`;
      config.headers.common['x-refresh-token'] = `${refreshToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const testApi = {
  test: () => api.get('/test/hello', {}),
};
