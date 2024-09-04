import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchNewsItems = () => {
  return api.get('/posts');
};

export const fetchNewsItemById = (id) => {
  return api.get(`/posts/${id}`);
};
