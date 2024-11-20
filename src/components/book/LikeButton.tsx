import styled from "styled-components";
import {BookDetail} from "../../model/book.model";
import Button from "../common/Button";
import {FaHeart} from "react-icons/fa";

interface ILikeButtonProps {
    book : BookDetail;
    onClick : () => void;
}

const LikeButton: React.FC<ILikeButtonProps> = ({
    book,
    onClick
}) => {
    return (
        <LikeButtonStyle
            size={"medium"}
            scheme={book.liked ? "like" : "normal"}
            onClick={onClick}
        >
            <FaHeart/>
            {book.likes}
        </LikeButtonStyle>
    )
};

const LikeButtonStyle = styled(Button)`
    display: flex;
    gap: 6px;
    
    svg {
        color: inherit;
        * {
            color: inherit;
        }
    }
`;




export default LikeButton;