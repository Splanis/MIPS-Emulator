import React from "react";

import styled from "styled-components";

const Sidebar = () => {
    return <StyledSidebar>Sidebar</StyledSidebar>;
};

const StyledSidebar = styled.div`
    grid-area: sidebar;
    background: #565656;

`;

export default Sidebar;
