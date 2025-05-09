import { useEffect, useState } from 'react';
import { useCurrencyRate } from './helpers/useCurrencyRate';
import { AmountInput } from './components/AmountInput';
import { CurrencySelect } from './components/CurrencySelect';
import { ConvertButton } from './components/ConvertButton';
import { Result } from './components/Result';
import { getCurrencyList, CurrencyMap } from './helpers/getCurrencyList';
import { flagCurrensies } from './helpers/flagCurrensies';
import { useFilteredCurrencies } from './helpers/useFilteredCurrencies';
import { CurrencyFilter } from './components/СurrencyFilter';

export function Converter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<CurrencyMap>({});
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [showTop, setShowTop] = useState(false);
  const [showCrypto, setShowCrypto] = useState(false);

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

  const currencyOptions = Object.entries(currencies).map(([code, data]) => ({
    code,
    name: data.name,
    flag: flagCurrensies[code] || '',
  }));

  const filteredOptions = useFilteredCurrencies(currencyOptions, showTop, showCrypto);

  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) return;
    const rate = await convert(fromCurrency, toCurrency);
    if (rate !== null) {
      setResult(Number(amount) * rate);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg grid gap-6 md:grid-cols-2 w-full">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          💱 Currency Converter
        </h1>

        <CurrencyFilter
          showTop={showTop}
          showCrypto={showCrypto}
          onToggleTop={() => setShowTop((prev) => !prev)}
          onToggleCrypto={() => setShowCrypto((prev) => !prev)}
        />

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
              options={filteredOptions}
            />
            <CurrencySelect
              label="To"
              value={toCurrency}
              onChange={setToCurrency}
              options={filteredOptions}
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
  );
}
