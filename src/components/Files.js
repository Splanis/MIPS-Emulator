import React, { useContext, useState } from "react";

import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Files = () => {
    const [state, dispatch] = useContext(Context);
    const [value, setValue] = useState(0);

    const { currentFile, files } = state.editor;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledFiles>
            {files[currentFile].fileName}
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </StyledFiles>
    );
};

const StyledFiles = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    background: #1a1a1a;
    padding-left: 10px;
    color: white;

    button {
        margin: 0 5px;
    }
`;

export default Files;
