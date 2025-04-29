type Props = {
  onClick: () => void;
};

export function ConvertButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    >
      Convert
    </button>
  );
}
