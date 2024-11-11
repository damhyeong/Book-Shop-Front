import Header from "../components/common/Header";
import {formatNumber} from "../utils/format";

const COUNT = 12345;

const Home = () => {
    return (
        <>
            <Header/>
            <div>Home Body</div>
            <div>COUNT : {formatNumber(COUNT)}</div>
        </>
    )
}

export default Home;