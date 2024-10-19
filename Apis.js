// src/config/api.js
import axios from 'axios';

// Configuración de la API
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', 
});

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Nueva función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/private', credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export default api;
