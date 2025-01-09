"use client";
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext'; // Import the ThemeContext
import clsx from 'clsx';
import { cn } from "@/lib/utils";
import DotPattern from '@/components/ui/dot-pattern';

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    const themeContext = useContext(ThemeContext); // Consume the ThemeContext

    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }

    const { theme } = themeContext; // Get the current theme

    // Set the theme class based on the current theme
    const themeClasses = clsx({
        'bg-whiteTheme-background-primary text-whiteTheme-text': theme === 'whiteTheme',
        'bg-darkBlueTheme-background-primary text-darkBlueTheme-text': theme === 'darkBlueTheme',
        'bg-darkGreenTheme-background-primary text-darkGreenTheme-text': theme === 'darkGreenTheme',
        'bg-purpleTheme-background-primary text-purpleTheme-text': theme === 'purpleTheme',
    });

    return (
        <main className={clsx(themeClasses, 'relative z-0')}> {/* Apply the theme class and grid lines background */}
            <DotPattern
                className=
                "absolute inset-0 opacity-50"
            />
            {children}
        </main>
    );
}

export default Layout; // Export the Layout component
