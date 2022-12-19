import styled from "styled-components";

export default function Icone({ color, children }) {
    return <StyledIcone background={color}>{children}</StyledIcone>
}

const StyledIcone = styled.div`
    align-items: center;
    background: ${(props) => props.background};
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    display: flex;
    height: 3.5rem;
    justify-content: center;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
    width: 3.5rem;
`;