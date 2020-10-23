import React from "react";

import styled from "styled-components";

const Terminal = () => {
    return <StyledTerminal>Terminal</StyledTerminal>;
};

const StyledTerminal = styled.div`
    grid-area: terminal;
    background: #161616;
    height: 100%;
    margin: 35px 0;
`;

export default Terminal;
