import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
        theme: 'light',
        toggleTheme: () => { },
});

function ThemeProvider({ children }) {
        const [theme, setTheme] = useState(() => {
                const storedTheme = localStorage.getItem('theme');
                return storedTheme
                        ? storedTheme : 'light';
        });

        const toggleTheme = () => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
        };

        useEffect(() => {
                document.body.className = theme;
        }, [theme]);

        return (
                <ThemeContext.Provider 
                        value={{
                                theme,
                                toggleTheme
                        }}
                >
                        {children}
                </ThemeContext.Provider>
        );
}

export {
        ThemeContext, ThemeProvider
};