import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const parsedValue = JSON.parse(localStorage.getItem('theme'));
    return parsedValue ?? "blue";
  });

  const onSelect = (selectValue) => {
    setTheme(selectValue);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onSelect,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
