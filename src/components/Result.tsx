type Props = {
  amount: string;
  from: string;
  to: string;
  result: number | null;
};
export function Result({ amount, from, to, result }: Props) {
  if (!result) return null;
  return (
    <div className="mt-4 text-center text-lg font-medium text-gray-700">
      {amount} {from} ={' '}
      <span className="font-bold text-green-600">
        {' '}
        {result.toFixed(2)} {to}
      </span>
    </div>
  );
}
