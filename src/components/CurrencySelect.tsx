type CurrencyOption = {
  code: string;
  name: string;
}

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: CurrencyOption[];
};

export function CurrencySelect({ label, value, onChange, options }: Props) {
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
        {options.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} – {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
}
