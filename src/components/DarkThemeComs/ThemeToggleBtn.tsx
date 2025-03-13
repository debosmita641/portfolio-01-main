"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center"
      >
        <Sun
          size={24}
          className="-rotate-90 scale-0 text-default-pink/80 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100"
        />

        <MoonStar
          size={24}
          strokeWidth={1.5}
          className="absolute rotate-0 scale-100 text-default-pink transition-all duration-300 ease-in-out dark:rotate-90 dark:scale-0"
        />
      </button>
    </>
  );
};

export default ThemeToggleBtn;
