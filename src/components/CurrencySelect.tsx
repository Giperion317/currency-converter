type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'UAH', 'RUB'];

export function CurrencySelect({ label, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}Currency</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        <option value="" disabled hidden>
          Select currency
        </option>
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}
