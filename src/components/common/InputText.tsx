import React, {ForwardedRef} from "react";
import styled from "styled-components";

interface IInputTextProps {
    placeholder? : string;
}

const InputText = React.forwardRef(
    ({placeholder} : IInputTextProps, ref : ForwardedRef<HTMLInputElement>) => {
        return (
            <InputTextStyled placeholder={placeholder} ref={ref}/>
        )
    }
);

const InputTextStyled = styled.input.attrs({type : "text"})`
    padding: 0.25rem 0.5rem;
    border: 1px solid ${ ({theme}) => theme.color.border } ;
    border-radius: ${ ({theme}) => theme.borderRadius.default };
    font-size: 1rem;
    line-height: 1.5;
    color: ${ ({theme}) => theme.color.text };
`;

export default InputText;