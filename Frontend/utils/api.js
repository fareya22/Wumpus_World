import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const createRandomEnvironment = () => API.post('/environment/create-random');
export const moveAgent = (data) => API.post('/agent/move', data);
