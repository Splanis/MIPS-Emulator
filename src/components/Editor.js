import React, { useContext } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";
import EditorSettings from "./EditorSettings";

const Editor = () => {
    const [state, dispatch] = useContext(Context);

    const { files, currentFile } = state.editor;
    const { theme, fontSize } = state.editorSettings;

    const handleEditorChange = (editor, data, value) => {
        dispatch({
            type: actions.SET_EDITOR,
            payload: { content: value, currentFile },
        });
    };

    return (
        <StyledEditor>
            <EditorSettings />
            <StyledControlledEditor
                fontSize={fontSize + "px"}
                onBeforeChange={handleEditorChange}
                value={files[currentFile].content}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "",
                    lineNumbers: true,
                    theme: theme,
                }}
            />
        </StyledEditor>
    );
};

const StyledEditor = styled.div`
    flex: 3;
`;

const StyledControlledEditor = styled(ControlledEditor)`
    height: 100%;
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.fontSize};

    .CodeMirror {
        min-height: 100%;
    }

    .CodeMirror-scroll {
        margin: 0;
        padding: 0;
    }
`;

export default Editor;
