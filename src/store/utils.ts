import { AxiosRequestConfig } from 'axios';

export const setLocalToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeLocalToken = () => {
  localStorage.removeItem('token');
};

export const getLocalToken = () => {
  return localStorage.getItem('token');
};

export const getAuthorizationHeader = (token: string) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  } as AxiosRequestConfig;
};
