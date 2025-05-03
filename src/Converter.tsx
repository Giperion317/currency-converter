import { useState } from 'react';
import { useCurrencyRate} from './helpers/useCurrencyRate';
import { AmountInput } from './components/AmountInput';
import { CurrencySelect } from './components/CurrencySelect';
import { ConvertButton } from './components/ConvertButton';
import { Result } from './components/Result';


export function Converter() {
    const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const { convert, loading, error } = useCurrencyRate();
  
  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) return;

    const rate = await convert(fromCurrency, toCurrency);
    if (rate !== null) {
      setResult(Number(amount) * rate);
    }

  }
    
    return (
         <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4">
      <h1 className="text-2xl font-bold text-center">Currency Converter</h1>
      <AmountInput value={amount} onChange={setAmount} />
      <CurrencySelect label="From" value={fromCurrency} onChange={setFromCurrency} />
      <CurrencySelect label="To" value={toCurrency} onChange={setToCurrency} />
        <ConvertButton onClick={handleConvert} />
        
        {loading && <p className='text-sm text-gray-500 text-center'>Converting...</p>}
        {error && <p className='text-red-500 text-center'>{error}</p>}
      <Result amount={amount} from={fromCurrency} to={toCurrency} result={result} />
    </div>
    )
    
}