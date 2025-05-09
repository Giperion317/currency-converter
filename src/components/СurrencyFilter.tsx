type Props = {
  showTop: boolean;
  showCrypto: boolean;
  onToggleTop: () => void;
  onToggleCrypto: () => void;
};

export function CurrencyFilter({ showTop, showCrypto, onToggleTop, onToggleCrypto }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-4 text-sm">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showTop}
          onChange={onToggleTop}
          className="accent-blue-600 w-4 h-4"
        />
        <span className="text-gray-700">Top currencies</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showCrypto}
          onChange={onToggleCrypto}
          className="accent-blue-600 w-4 h-4"
        />
        <span className="text-gray-700">Crypto</span>
      </label>
    </div>
  );
}
