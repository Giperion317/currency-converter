import { useState } from "react";
import { getCurrencyRate } from "./getCurrencyRate";

export function useCurrencyRate() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)
    
    async function convert(from: string, to: string): Promise<number | null> {
        setLoading(true);
        setError(null);
        try {
            const rate = await getCurrencyRate(from, to)
            return rate
        } catch (err) {
            setError((err as Error).message);
            return null
        } finally {
            setLoading(false)
        }
        
    }
return {convert, loading, error}
}