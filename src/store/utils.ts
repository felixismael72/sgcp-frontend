export const setLocalToken = (token: string) => {
  localStorage.setItem('token', `Bearer ${token}`);
};

export const removeLocalToken = () => {
  localStorage.removeItem('token');
};

export const getLocalToken = () => {
  localStorage.getItem('token');
};

export const getAuthorizationHeader = (token: string) => {
  return { Headers: { Authorization: `Bearer ${token}` } };
};
