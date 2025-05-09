type Props = {
  onClick: () => void;
};

export function ConvertButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 mb-4"
    >
      Convert
    </button>
  );
}
