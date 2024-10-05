import { useContext } from "react"
import { ThemeContext } from "../Context"

 const Header = () => {
    const {theme} = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px'
    };

    return <header style={style}>This is fom header </header>
};

export default Header;