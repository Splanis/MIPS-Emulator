import React, { useContext, useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

const Editor = () => {
    const [state, dispatch] = useContext(Context);

    const handleEditorChange = (editor, data, value) => {
        dispatch({ type: actions.SET_EDITOR, payload: value });
    };

    return (
        <StyledEditor>
            <StyledEditorSettings>
                {state.openFile && <div>Open File: {state.openFile}</div>}
                <FontSizeChangeButton
                    onClick={() => {
                        dispatch({ type: actions.DECREMENT_FONT_SIZE });
                    }}
                >
                    -
                </FontSizeChangeButton>
                {state.editorSettings.fontSize}
                <FontSizeChangeButton
                    onClick={() => {
                        dispatch({ type: actions.INCREMENT_FONT_SIZE });
                    }}
                >
                    +
                </FontSizeChangeButton>
            </StyledEditorSettings>
            <StyledControlledEditor
                fontSize={state.editorSettings.fontSize + "px"}
                onBeforeChange={handleEditorChange}
                value={state.editor}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "",
                    lineNumbers: true,
                    theme: state.editorSettings.theme,
                }}
            />
        </StyledEditor>
    );
};

const StyledEditor = styled.div`
    grid-area: editor;
`;

const StyledEditorSettings = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    background: #1a1a1a;
    padding-left: 10px;
`;

const StyledControlledEditor = styled(ControlledEditor)`
    height: 100%;
    font-size: ${(props) => props.fontSize};

    .CodeMirror {
        min-height: 100%;
    }

    .CodeMirror-scroll {
        margin: 0;
        padding: 0;
    }
`;

const FontSizeChangeButton = styled.div`
    border: none;
    background: transparent;
    margin: 5px;
    font-size: 25px;

    &:hover {
        cursor: pointer;
    }
`;

export default Editor;
