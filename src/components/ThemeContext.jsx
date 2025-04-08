// I am trying to create a centralised state which will contain the value of our theme , if we wan't to change that theme we can directly triggered that state or we can get the value of theme , we can just get value direct from the context

import React from 'react';

import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleTheme = () => setisDarkMode((prev) => !prev);

  // we can just provide the access of these darkmode and toggler to whole of our app

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext