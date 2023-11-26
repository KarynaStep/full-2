import axios from 'axios';
import qs from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getOneUser = (id) => httpClient.get(`/users/${id}`);

export const getAllUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    amount: 5,
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(finallyOptions)}`);
};

export const createUser = (values) =>
  httpClient.post('/users', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  

export const deleteUsers = (id) => httpClient.delete(`/users/${id}`);

export const getAllUsersTasks = ({id}) => httpClient.get(`/users/${id}/tasks`);



export const updateUser = ([id, values]) =>
  httpClient.patch(`/users/${id}`, values, {
    headers: { "Content-Type": "multipart/form-data" },
  });
