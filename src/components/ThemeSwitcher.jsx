import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeSwitcher
