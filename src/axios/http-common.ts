import axios from 'axios';

export default axios.create({
    baseURL: 'https://astronaut-evidence.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});