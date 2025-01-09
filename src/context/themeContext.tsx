import React, { createContext, useEffect, useState, ReactNode } from "react";

// Define the theme types
type Theme = "whiteTheme" | "darkBlueTheme" | "darkGreenTheme" | "purpleTheme";

// Define the context interface
interface ThemeContextProps {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

// Create the ThemeContext
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("whiteTheme");

    // Load the saved theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.className = savedTheme;
        }
        else {
            setTheme("whiteTheme");
            document.documentElement.className = "whiteTheme";
        }
    }, []);

    // Function to change the theme
    const changeTheme = (newTheme: Theme) => {
        document.documentElement.className = newTheme;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Provide the context value
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }
        }>
            {children}
        </ThemeContext.Provider>
    );
};
