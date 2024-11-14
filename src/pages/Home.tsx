import Header from "../components/common/Header";
import {formatNumber} from "../utils/format";
import Footer from "../components/common/Footer";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";

const COUNT = 12345;

const Home = () => {
    return (
        <>
            <Title size={"large"} color={"background"}>
                제목 Testing
            </Title>
            <Button size={"large"} scheme={"normal"} >
                버튼 Testing
            </Button>
            <InputText placeholder={"InputText Testings.."}/>
            <div>Home Body</div>
            <div>COUNT : {formatNumber(COUNT)}</div>
        </>
    )
}

export default Home;