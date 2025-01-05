import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' }
});

export default httpClient;