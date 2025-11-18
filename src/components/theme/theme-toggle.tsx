"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useThemeStore } from "@/store/theme-store";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const shouldBeDark = theme === "dark";

    // Only update Zustand if needed
    if (shouldBeDark !== isDarkMode) {
      useThemeStore.setState({ isDarkMode: shouldBeDark });
    }
  }, [theme]);

  const handleToggleTheme = () => {
    toggleTheme();
    setTheme(isDarkMode ? "light" : "dark");
  };
  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleToggleTheme}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
