import {ThemeName} from "../../style/theme";

interface IThemeSwitcherProps {
    themeName : ThemeName;
    setThemeName: (themeName: ThemeName) => void;
}

const ThemeSwitcher : React.FC<IThemeSwitcherProps> = ({
    themeName,
    setThemeName
}) => {
    const toggleTheme = () => {
        setThemeName(themeName === "light" ? "dark" : "light");
    }

    return (
        <button
            onClick={toggleTheme}
        >{themeName}</button>
    )
}

export default ThemeSwitcher;