import {styled} from "styled-components";
import {Colorkey} from "../../style/theme";

interface ITitleProps {
    children: React.ReactNode;
    size: "large" | "medium" | "small";
    color? : Colorkey;
}

const Title : React.FC<ITitleProps> = ({
    children, size, color
}) => {
    return (
        <TitleStyle size={size} color={color}>
            {children}
        </TitleStyle>
    );
}

const TitleStyle = styled.h1<Omit<ITitleProps, "children">>`
    font-size: ${({theme, size}) => theme.heading[size].fontSize };
    color: ${({theme, color, size}) => color ? theme.color[color] : theme.color.primary};
`;

export default Title;