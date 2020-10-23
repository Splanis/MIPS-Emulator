import React, { useContext } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";



const Editor = () => {
    const [state, dispatch] = useContext(Context);

    const handleChange = (editor, data, value) => {
        dispatch({ type: actions.SET_EDITOR, payload: value });
    };

    return (
        <StyledControlledEditor
            onBeforeChange={handleChange}
            value={state.editor}
            options={{
                lineWrapping: true,
                lint: true,
                mode: "",
                lineNumbers: true,
                theme: "monokai",
            }}
        />
    );
};

const StyledControlledEditor = styled(ControlledEditor)`
    grid-area: editor;
`;

export default Editor;
