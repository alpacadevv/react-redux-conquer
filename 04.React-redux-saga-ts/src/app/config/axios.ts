import axios from 'axios';
import env from '../config/env';

const instance = axios.create({
  baseURL: env.POST_API_URL,
});

export default instance;
