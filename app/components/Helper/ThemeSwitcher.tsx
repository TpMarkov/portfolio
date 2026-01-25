"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <BsSunFill className="w-5 h-5 text-yellow-400" />
            ) : (
                <BsMoonStarsFill className="w-5 h-5 text-indigo-900" />
            )}
        </button>
    );
};

export default ThemeSwitcher;
