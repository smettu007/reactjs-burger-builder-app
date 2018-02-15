import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-a3da5.firebaseio.com/'
});

export default instance;