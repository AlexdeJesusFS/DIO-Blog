import axios from 'axios';
require('dotenv').config();


export const api  = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    headers: {
        apikey: `${process.env.API_KEY}`,
        authorization: `Bearer ${process.env.AUTHORIZATION}`
    }
})
