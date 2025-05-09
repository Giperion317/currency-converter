import { useEffect, useState } from 'react';
import { useCurrencyRate } from './helpers/useCurrencyRate';
import { AmountInput } from './components/AmountInput';
import { CurrencySelect } from './components/CurrencySelect';
import { ConvertButton } from './components/ConvertButton';
import { Result } from './components/Result';
import { getCurrencyList, CurrencyMap } from './helpers/getCurrencyList';
import { flagCurrensies } from './helpers/flagCurrensies';

export function Converter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<CurrencyMap>({});
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const { convert, loading, error } = useCurrencyRate();

  useEffect(() => {
    async function loadCurrencies() {
      try {
        const data = await getCurrencyList();
        setCurrencies(data);
        setFetchError('');
      } catch (err) {
        console.error(err);
        setFetchError('Failed to load currency list');
      } finally {
        setLoadingCurrencies(false);
      }
    }
    loadCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) return;

    const rate = await convert(fromCurrency, toCurrency);
    if (rate !== null) {
      setResult(Number(amount) * rate);
    }
  };

  const currencyOptions = Object.entries(currencies).map(([code, data]) => ({
    code,
    name: data.name,
    flag: flagCurrensies[code] || '',
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg grid gap-6 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          💱 Currency Converter
        </h1>

        {loadingCurrencies ? (
          <p className="text-sm text-gray-500 text-center">Loading currencies...</p>
        ) : fetchError ? (
          <p className="text-red-500 text-center">{fetchError}</p>
        ) : (
          <>
            <CurrencySelect
              label="From"
              value={fromCurrency}
              onChange={setFromCurrency}
              options={currencyOptions}
            />
            <CurrencySelect
              label="To"
              value={toCurrency}
              onChange={setToCurrency}
              options={currencyOptions}
            />
          </>
        )}

        <AmountInput value={amount} onChange={setAmount} />
        <ConvertButton onClick={handleConvert} />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        {loading && <p className="text-sm text-gray-500 mb-2">Converting...</p>}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <Result amount={amount} from={fromCurrency} to={toCurrency} result={result} />
      </div>
    </div>
  </div>
  );
}
