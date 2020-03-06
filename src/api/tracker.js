import Axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = Axios.create({
  baseURL: 'http://localhost:3005/'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
