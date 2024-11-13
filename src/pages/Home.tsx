import Header from "../components/common/Header";
import {formatNumber} from "../utils/format";
import Footer from "../components/common/Footer";

const COUNT = 12345;

const Home = () => {
    return (
        <>
            <div>Home Body</div>
            <div>COUNT : {formatNumber(COUNT)}</div>
        </>
    )
}

export default Home;