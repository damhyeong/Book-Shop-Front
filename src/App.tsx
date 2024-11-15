import Home from "./pages/Home";
import "./App.css"
import Layout from "./components/layout/Layout";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProvider} from "./context/themeContext";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/common/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path : "/",
        element: <Layout><Home/></Layout>,
        errorElement : <Layout><Error /></Layout>
    },
    {
        path: "/books",
        element: <Layout>
            <div>도서 목록</div>
        </Layout>
    },
    {
        path: "/signup",
        element: (
            <Layout>
                <Signup />
            </Layout>
        )
    }
]);

function App() {
    return (
        <BookStoreThemeProvider>
            <ThemeSwitcher />
            <RouterProvider router={router}/>
        </BookStoreThemeProvider>
    )
}

export default App;
