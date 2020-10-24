import React, { useContext } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";
import EditorSettings from "./EditorSettings";
import CodeMirror from "codemirror";
import mips from "../utils/mips"
import "../css/mips.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import mipsHint from "../utils/mips-hints.js";

CodeMirror.defineMode("mips", mips);

const Editor = () => {
    const [state, dispatch] = useContext(Context);

    const handleEditorChange = (editor, data, value) => {
        dispatch({ type: actions.SET_EDITOR, payload: value });
    };

    return (
        <StyledEditor>
            <EditorSettings />
            <StyledControlledEditor
                fontSize={state.editorSettings.fontSize + "px"}
                onBeforeChange={handleEditorChange}
                value={state.editor}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "mips",
                    lineNumbers: true,
                    theme: state.editorSettings.theme,
                    showHint: true,
                    hintOptions: { hint: mipsHint, completeOnSingleClick: true },
                    extraKeys: {"Ctrl-Space": "autocomplete"}
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
