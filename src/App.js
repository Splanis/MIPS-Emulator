import React from "react";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

import styled from "styled-components";

function App() {
    return (
        <StyledApp>
            <Navigation />
            <Editor />
            <Sidebar />
            <Terminal />
        </StyledApp>
    );
}

const StyledApp = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 15fr 4fr;
    grid-template-areas:
        "navigation navigation"
        "editor sidebar"
        "terminal sidebar";
`;

export default App;
