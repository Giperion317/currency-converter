import { useMemo } from 'react';

export const topCurrensies = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'CHF',
  'AUD',
  'CAD',
  'UAH',
  'RUB',
];
export const cryptoCurensies = [
  'BTC',
  'ETH',
  'LTC',
  'XRP',
  'DOGE',
  'SOL',
  'DOT',
  'ADA',
  'BNB',
  'USDT',
  'USDC',
];

type CurrencyOption = {
    code: string;
    name: string;
    flag: string;
}

export function useFilteredCurrencies(allCurrencies: CurrencyOption[], showTop: boolean, showCrypto: boolean) {
    return useMemo(() => {
        return allCurrencies.filter(({ code }) => {
            const isTop = topCurrensies.includes(code)
            const isCrypto = cryptoCurensies.includes(code)

            if (!showTop && !showCrypto) return true;
            return (showTop && isTop) || (showCrypto && isCrypto)
        })
    },[allCurrencies, showTop, showCrypto])
}
