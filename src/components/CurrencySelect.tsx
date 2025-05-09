type CurrencyOption = {
  code: string;
  name: string;
  flag: string;
};

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: CurrencyOption[];
};

export function CurrencySelect({ label, value, onChange, options }: Props) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
        >
          <option value="">Select currency</option>
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.flag} {option.code} – {option.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a.75.75 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.06-1.06L10 10.19l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4A.75.75 0 0 1 10 12Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
