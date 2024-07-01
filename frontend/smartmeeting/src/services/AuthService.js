import ApiService from './ApiService';

const AuthService = {
  login: async (email, password) => {
    const response = await ApiService.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    ApiService.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  },
  register: async (email, password) => {
    await ApiService.post('/auth/register', { email, password });
  },
  logout: () => {
    localStorage.removeItem('token');
    delete ApiService.defaults.headers.common['Authorization'];
  },
};

export default AuthService;
