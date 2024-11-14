import Header from "../components/common/Header";
import {formatNumber} from "../utils/format";
import Footer from "../components/common/Footer";
import Title from "../components/common/Title";

const COUNT = 12345;

const Home = () => {
    return (
        <>
            <Title size={"large"} color={"background"}>
                제목 Testing
            </Title>
            <div>Home Body</div>
            <div>COUNT : {formatNumber(COUNT)}</div>
        </>
    )
}

export default Home;