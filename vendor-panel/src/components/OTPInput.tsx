import { useEffect, useRef } from "react";

type Props = {
    value: string;
    onChange: (v: string) => void;
    length?: number;
};

export default function OTPInput({ value, onChange, length = 6 }: Props) {
    const inputs = Array.from({ length });
    const refs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        refs.current[0]?.focus();
    }, []);

    const handleChange = (idx: number, ch: string) => {
        const digit = ch.replace(/\D/g, "").slice(-1);
        const chars = value.split("");
        chars[idx] = digit || "";
        const next = chars.join("").slice(0, length);
        onChange(next);

        if (digit && idx < length - 1) refs.current[idx + 1]?.focus();
    };

    const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !value[idx] && idx > 0) {
            refs.current[idx - 1]?.focus();
        }
    };

    return (
        <div className="flex items-center justify-between gap-2">
            {inputs.map((_, i) => (
                <input
                    key={i}
                    ref={(el) => (refs.current[i] = el)}
                    value={value[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 rounded-xl border border-slate-300 text-center text-xl tracking-widest
                     focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
            ))}
        </div>
    );
}
