import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ad594ff82414820f1f50c64b1edc7464a6662b4c15f3229648f2acd4a77c727c'
    }
});