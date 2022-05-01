import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { darkTheme, lightTheme } from "../lib/theme/theme";

const ThemeContext = createContext({});

export function StyledProvider({children}) {
  const [theme, setTheme] = useState('dark');
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const themeToggle = () => {
    setTheme((prev)=> (prev==='dark'?'light': 'dark'))
  }
  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext;

