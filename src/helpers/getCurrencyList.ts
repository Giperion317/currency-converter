import { api } from './api'

export type CurrencyMap = {
    [code: string]: {
        name: string;
        symbol: string | null;
    };
}

export async function getCurrencyList(): Promise<CurrencyMap> {
    const key = import.meta.env.VITE_CURRENCY_API_KEY;

    const response = await api.get('/currencies', {
        params: {
            apikey: key,
        },
    })
    return response.data.data;
}