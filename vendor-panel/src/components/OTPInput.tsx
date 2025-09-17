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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            {inputs.map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: "relative",
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <input
                        ref={(el) => (refs.current[i] = el)}
                        value={value[i] || ""}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        inputMode="numeric"
                        maxLength={1}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            textAlign: "center",
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#2D2D2D",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            zIndex: 2,
                        }}
                    />
                    {!value[i] && (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "0",
                                right: "0",
                                height: "2px",
                                background: "#D0D0D0",
                                borderRadius: "1px",
                                transform: "translateY(-50%)",
                                zIndex: 1,
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
