import axios from 'axios';

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_APP_PUBLIC_KEY,
  headers: { 'Content-Type': 'application/json' },
});

export const signUpApi = axios.create({
  baseURL: import.meta.env.VITE_APP_PUBLIC_KEY,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_APP_PUBLIC_KEY,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

privateApi.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('userToken');

    if (!token) {
      config.headers['authorization'] = null;
      config.headers['authorization-refresh'] = null;
    } else {
      const { authorization, 'authorization-refresh': authorizeRefresh } =
        JSON.parse(token);
      config.headers['authorization'] = `Bearer ${authorization}`;
      config.headers['authorization-refresh'] = `Bearer ${authorizeRefresh}`;
    }
    console.log('config.headers', config.headers);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

privateApi.interceptors.response.use(
  function (response) {
    // 값이 정상적으로 들어왔을 때(200번대 응답)
    return response;
  },

  async function (error) {
    // 에러일 경우 처리(200번대 응답이 아닐 경우)

    const originConfig = error.config;

    if (error.response.status === 403) {
      const refreshToken = originConfig.headers['authorization-refresh'];
      try {
        const data = await axios({
          url: '/api/auth/re-issue',
          method: 'POST',
          headers: {
            'authorization-refresh': refreshToken,
          },
        });

        // const data = await basicApi.post('/api/auth/re-issue', {
        //   headers: { 'Authorization-Refresh': refreshToken },
        // });

        if (data) {
          localStorage.setItem(
            'token',
            JSON.stringify(data.data, [
              'authorization',
              'authorization-refresh',
            ]),
          );
          return await privateApi.request(originConfig);
        }
      } catch (error) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);
