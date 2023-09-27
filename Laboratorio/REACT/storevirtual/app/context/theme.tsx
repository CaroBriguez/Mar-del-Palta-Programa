'use client';

import { createContext, useContext, useState } from "react";

///Permite cambiar el color al tema

///  delclara variables globales
///  se crea un provider para poder despues usar el context

const ThemeContext = createContext ({});

export const ThemeContextProvider =({children})=> {
    const [color, setColor] = useState('bg-black');

    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>

    );
}

export const useThemeContext = () => useContext(ThemeContext)