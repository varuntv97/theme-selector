import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ThemeSelector: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        return null;
    }
    const { theme, changeTheme } = themeContext;

    const themes = [
        { name: "White", className: "whiteTheme" },
        { name: "Blue", className: "darkBlueTheme" },
        { name: "Green", className: "darkGreenTheme" },
        { name: "Purple", className: "purpleTheme" },
    ];

    return (

        <div className="flex flex-col items-center">
            <h5 className="text-center">Personalize Theme</h5>
            <div className="flex space-x-4 justify-center mt-5">
                {themes.map(({ name, className }) => (
                    <button
                        key={className}
                        onClick={() => changeTheme(className as "whiteTheme" | "darkBlueTheme" | "darkGreenTheme" | "purpleTheme")}
                        className={`bg-${className}-background-primary ${theme === className ? `border-2 border-white` : ""
                            } h-[30px] w-[30px] rounded-full m-[5px] cursor-pointer shadow-[-1px_1px_3px_-1px_rgba(0,0,0,0.75)] hover:border-[5px]`}
                    >
                    </button>
                ))}
            </div>
            <p className="italic text-center text-xs mt-5">*Theme settings will be saved for <br />
                your next visit</p>
        </div>

    );
};

export default ThemeSelector;
