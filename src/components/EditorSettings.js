import React, { useContext } from "react";

import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

const themes = ["material", "monokai"];

const EditorSettings = () => {
    const [state, dispatch] = useContext(Context);

    const handleThemeChange = (e) => {
        dispatch({ type: actions.CHANGE_THEME, payload: e.target.value });
    };

    const handleFontSizeDecrement = () => {
        dispatch({ type: actions.DECREMENT_FONT_SIZE });
    };

    const handleFontSizeIncrement = () => {
        dispatch({ type: actions.INCREMENT_FONT_SIZE });
    };

    return (
        <StyledEditorSettings>
            {state.openFile && <div>Open File: {state.openFile}</div>}
            <FontSizeChangeButton onClick={handleFontSizeDecrement}>-</FontSizeChangeButton>
            {state.editorSettings.fontSize}
            <FontSizeChangeButton onClick={handleFontSizeIncrement}>+</FontSizeChangeButton>
            <SelectTheme onChange={handleThemeChange} value={state.editorSettings.theme}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </SelectTheme>
        </StyledEditorSettings>
    );
};

const StyledEditorSettings = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    background: #1a1a1a;
    padding-left: 10px;
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

const SelectTheme = styled.select`
    width: 110px;
    margin: 5px;
    font-size: 16px;
    height: 26px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #383838;
    color: white;

    &:active,
    &:hover {
        outline: none;
    }

    &:active,
    &:hover {
        outline-color: red;
    }
`;

export default EditorSettings;
