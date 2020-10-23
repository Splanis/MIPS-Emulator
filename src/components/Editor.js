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
    const [fontSize, setFontSize] = useState(16);

    const handleChange = (editor, data, value) => {
        dispatch({ type: actions.SET_EDITOR, payload: value });
    };

    return (
        <StyledEditor>
            <StyledEditorSettings>
                {state.openFile && <div>Open File: {state.openFile}</div>}

            </StyledEditorSettings>
            <StyledControlledEditor
                onBeforeChange={handleChange}
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

    .CodeMirror {
        min-height: 100%;
    }

    .CodeMirror-scroll {
        margin: 0;
        padding: 0;
    }
`;

export default Editor;
