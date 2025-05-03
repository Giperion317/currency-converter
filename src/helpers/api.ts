import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.currencyapi.com/v3',
})