'use client'

import React, { useState, useEffect } from "react";

type MThemeToggleProps = {
  className?: string;
  lightIcon?: string;
  darkIcon?: string;
};

export const MThemeToggle: React.FC<MThemeToggleProps> = ({
                                                          className = "",
                                                          lightIcon = "lucide:moon",
                                                          darkIcon = "lucide:sun",
                                                        }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedPreference = window.localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (savedPreference) {
      setTheme(savedPreference);
      document.documentElement.setAttribute("data-theme", savedPreference);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const iconName = theme === "light" ? lightIcon : darkIcon;

  return (
    <div className={`theme-toggle ${className}`} onClick={toggleTheme}>
      <i className={`icon-${iconName}`} aria-label={`Switch to ${theme} mode`} />
    </div>
  );
};
