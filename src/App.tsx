import Home from "./pages/Home";
import "./App.css"
import Layout from "./components/layout/Layout";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProvider} from "./context/themeContext";

function App() {
    return (
        <BookStoreThemeProvider>
            <ThemeSwitcher/>
            <Layout>
                <Home/>
            </Layout>
        </BookStoreThemeProvider>
    )
}

export default App;
