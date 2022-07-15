import { useEffect, useState } from "react";

type DarkModeState = "dark" | "light"

export function useDarkMode(){
  const [theme, setTheme] = useState("dark");
  const colorTheme: DarkModeState = theme === "dark" ? "light" : "dark";

  useEffect(()=>{
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  },[theme, colorTheme])

  return [colorTheme, setTheme] as const;
}