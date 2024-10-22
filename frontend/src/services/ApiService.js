import axios from 'axios';
import { process } from 'node';

const ApiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default ApiService;
