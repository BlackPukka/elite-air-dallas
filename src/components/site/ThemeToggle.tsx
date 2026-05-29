import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved ? saved === "dark" : true;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="btn-elite is-ghost size-10 p-0"
    >
      {dark ? <Sun className="size-4 text-gold" /> : <Moon className="size-4 text-navy" />}
    </button>
  );
}
