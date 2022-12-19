import styled from "styled-components";

export default function Input({ type, placeholder }) {
    return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
    background: rgba(250, 247, 247, 0.15);
    border: none;
    border-radius: 2rem;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    color: #3c354e;
    width: 80%;
    font-size: 1rem;
    font-weight: bold;
    height: 3rem;
    margin: 0.3rem;
    outline: none;
    padding: 1rem;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        color: #b9abe099;
        font-weight: 100;
        font-size: 1rem;
    }
`;