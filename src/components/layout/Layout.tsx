import Header from "../common/Header";
import Footer from "../common/Footer";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<ILayoutProps> = ({children} : ILayoutProps) => {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;