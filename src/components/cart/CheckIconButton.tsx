import React from "react";
import styled from "styled-components";
import {FaRegCheckCircle, FaRegCircle} from "react-icons/fa";

interface ICheckIconButtonProps {
    isChecked : boolean;
    onCheck: () => void;
}

const CheckIconButton: React.FC<ICheckIconButtonProps> = ({
    isChecked,
    onCheck
}) => {
    return (
        <CheckIconButtonStyle onClick={onCheck}>
            {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
        </CheckIconButtonStyle>
    )
};

const CheckIconButtonStyle = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
    
    svg {
        width: 24px;
        height: 24px;
    }
`;

export default CheckIconButton;