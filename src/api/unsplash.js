import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 53de0c5c1817c770f156302503f78a79b8951424a065aba7d0c9337a3bf103f4'
    }
});