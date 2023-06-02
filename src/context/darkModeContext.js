import { createContext, useReducer } from "react";
import darkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};
export const darkModeContext = createContext(INITIAL_STATE);
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContextProvider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContextProvider>
  );
};
