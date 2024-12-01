import React from "react";
import styled from "styled-components";
import Title from "./Title";

interface IEmptyProps {
    icon? : React.ReactNode;
    title : string;
    description : React.ReactNode;
}

const Empty : React.FC<IEmptyProps> = ({
    icon,
    title,
    description
}) => {
    return (
        <EmptyStyle>
            {icon && <div className={"icon"}>{icon}</div> }
            <Title size={"large"} color={"secondary"}>
                {
                    title ? (title) : ("검색 결과가 없습니다.")
                }
            </Title>
            <p>
                {description && (
                    description
                )}
            </p>
        </EmptyStyle>
    )
};

const EmptyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    
    .icon {
        svg {
            font-size: 4rem;
            fill: #ccc;
        }
    }
`

export default Empty;