import { api } from '_api';

export const studentAuthApi = {
  postEmail: (email: string) =>
    api.post('/members/univ-certify', email, {
      headers: {
        'Content-Type': `application/json`,
      },
    }),
};

export const logInApi = {
  postPermissionCode: (code: any) => api.get(`/login/oauth_kakao?code=${code}`),
  // api.get("https://kauth.kakao.com/oauth/authorize?client_id=b99bba6a1951beda24353d74dfa952d3&redirect_uri=http://3.39.129.136:8090/DungziProject/login/oauth_kakao&response_type=code"),

  postToken: (token: any) =>
    api.post('/login/oauth_kakao', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
