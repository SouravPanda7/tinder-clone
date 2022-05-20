import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://project-1-backendsp07.herokuapp.com/'
})

export default instance;