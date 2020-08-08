import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mn-proffy.herokuapp.com/',
});

export default api;
