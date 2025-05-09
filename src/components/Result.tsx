type Props = {
  amount: string;
  from: string;
  to: string;
  result: number | null;
};

import { flagCurrensies } from '../helpers/flagCurrensies';

export function Result({ amount, from, to, result }: Props) {
  if (!amount || !from || !to || result === null) return null;

  const fromFlag = flagCurrensies[from] || '';
  const toFlag = flagCurrensies[to] || '';

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-xl shadow-inner w-full max-w-sm mx-auto">
      <p className="text-lg font-semibold text-gray-800 text-center">
        {fromFlag} {amount} {from} = {toFlag} {result.toFixed(2)} {to}
      </p>
    </div>
  );
}