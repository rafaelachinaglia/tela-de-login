import styled from "styled-components";

export default function Botão({ content }) {
    return <StyledBotao>{content}</StyledBotao>
}

const StyledBotao = styled.button`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    border: none;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    height: 3rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    width: 65%;
`;