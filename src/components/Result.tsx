type Props = {
    amount: string;
    from: string;
    to: string;
    result: number | null;
}
export function Result({ amount, from, to, result }: Props) {
    if (!result) return null
    return (
        <div className="text-center mt-4 font-semibold text-lg">
{amount} {from} = {result.toFixed(2)} {to}
        </div>
    )
}