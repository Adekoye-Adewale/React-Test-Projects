import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ToggleTheme() {
        const { toggleTheme } = useContext(ThemeContext);

        return (
                <>
                        <ModeSwitch 
                                toggleTheme={toggleTheme}
                        />
                </>
        );
}

const LightMode = () => {
        return (
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                >
                        <path
                                fill="#f0f9ff"
                                d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
                        />
                </svg>
        );
}

const DarkMode = () => {
        return (
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                >
                        <path
                                fill="#020617"
                                d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56"
                        />
                </svg>
        );
}

const ModeSwitch = ({ toggleTheme }) => {
        return (
                <button 
                        className={`relative flex items-center justify-center border-solid border-2 rounded-full dark:border-sky-50 border-slate-950 p-1 bg-sky-100 dark:bg-slate-950 overflow-clip`}
                        title={`Switch to mode`}
                        onClick={toggleTheme}
                >
                        <div
                                className={`transition-all duration-300 opacity-100 dark:opacity-0 translate-x-0 dark:translate-x-6`}
                        >
                                <DarkMode />
                        </div>
                        <div
                                className={`transition-all duration-300 opacity-0 dark:opacity-100 -translate-x-6 dark:translate-x-0`}
                        >
                                <LightMode />
                        </div>
                </button>
        )
}