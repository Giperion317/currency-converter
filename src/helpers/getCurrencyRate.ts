import { api } from './api';

export async function getCurrencyRate(from: string, to: string): Promise<number> {
  const key = import.meta.env.VITE_CURRENCY_API_KEY;

  const response = await api.get('/latest', {
    params: {
      apikey: key,
      base_currency: from,
      currencies: to,
    },
  });

  const rate = response.data.data[to]?.value;

  if (!rate) {
    throw new Error('No rate found for selected currencies');
  }

  return rate;
}
