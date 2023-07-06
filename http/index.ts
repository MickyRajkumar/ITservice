import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchUsers = async () => api.get('/users');
