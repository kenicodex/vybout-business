import api from '../lib/apiClient';
export const fetchFeed = () => api.get('/feed');
