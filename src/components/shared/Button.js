import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c0c0c0;
    color: ${(props) => (props.disabled ? "grey" : "black")};
    padding: 10px 5px;
    border: none;
    width: 120px;
    height: 35px;
    margin: 5px;
    font-size: 1rem;

    &:hover {
        cursor: ${(props) => (props.disabled ? "auto" : "cursor")};
    }
`;
