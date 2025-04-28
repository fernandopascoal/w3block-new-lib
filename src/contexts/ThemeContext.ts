import { createContext } from "react";
import { IThemeContext } from "../interfaces/IThemeContext";

export const ThemeContext = createContext<IThemeContext | null>(null);