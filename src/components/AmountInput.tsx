type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function AmountInput({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Amount</label>
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
