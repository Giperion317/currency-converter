import { useState } from 'react';
import { AmountInput } from './components/AmountInput';
import { CurrencySelect } from './components/CurrencySelect';
import { ConvertButton } from './components/ConvertButton';
import { Result } from './components/Result';

export function Converter() {
    const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState<number | null>(null);
    
    return (
         <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4">
      <h1 className="text-2xl font-bold text-center">Currency Converter</h1>
      <AmountInput value={amount} onChange={setAmount} />
      <CurrencySelect label="From" value={fromCurrency} onChange={setFromCurrency} />
      <CurrencySelect label="To" value={toCurrency} onChange={setToCurrency} />
      <ConvertButton onClick={() => {/* позже добавим API */}} />
      <Result amount={amount} from={fromCurrency} to={toCurrency} result={result} />
    </div>
    )
    
}