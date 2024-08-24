// src/components/ThemeSwitcher.jsx
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitcher;
