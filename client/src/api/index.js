import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

//get chat
export const getChat = () => API.get('/chat');

//add chat
export const createChat = (newChat) => API.post('/chat', newChat);

//tests
export const testGet= () => API.get('/test/get');
export const testPost= () => API.post ('/test/post');
