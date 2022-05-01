import { useContext } from "react";
import ThemeContext from "../contexts/style-provider";

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme
