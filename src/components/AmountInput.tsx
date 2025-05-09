type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function AmountInput({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
              }}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter amount"
      />
    </div>
  );
}
