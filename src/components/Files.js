import React, { useContext, useState } from "react";

import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CloseIcon from "@material-ui/icons/Close";

const Files = () => {
    const [state, dispatch] = useContext(Context);

    const { currentFile, files } = state.editor;

    const handleNewFile = () => {
        dispatch({ type: actions.NEW_FILE });
    };

    const handleCloseFile = () => {
        dispatch({ type: actions.CLOSE_FILE, payload: currentFile });
    };

    return (
        <StyledFiles>
            <Tabs value={currentFile} aria-label="file tabs" textColor="secondary">
                {files.map((file, index) => (
                    <Tab
                        key={index}
                        label={
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {file.fileName}
                                <CloseIcon
                                    fontSize="small"
                                    onClick={handleCloseFile}
                                    style={{ marginLeft: 5 }}
                                />
                            </div>
                        }
                        onClick={() => dispatch({ type: actions.CHANGE_FILE, payload: index })}
                        style={{ textTransform: "none" }}
                    />
                ))}
            </Tabs>

            <IconButton color="primary" onClick={handleNewFile}>
                <AddCircleOutlineOutlinedIcon />
            </IconButton>
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
