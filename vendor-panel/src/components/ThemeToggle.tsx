// src/components/ThemeToggle.tsx
import { useTheme } from "@/theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, resolved, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <span className="opacity-70">Theme:</span>
      <select
        className="rounded-xl border border-border bg-card px-3 py-1"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System ({resolved})</option>
      </select>
    </div>
  );
}