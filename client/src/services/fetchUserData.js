// src/services/fetchUserData.js
import api from './api';

const fetchUserData = async () => {
  try {
    const response = await api.get('/users/:id');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchUserData;