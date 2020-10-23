import React, { useContext } from "react";

import styled from "styled-components";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

const themes = ["material", "monokai"];
const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 30, 36, 48, 60, 72, 96];

const EditorSettings = () => {
    const [state, dispatch] = useContext(Context);

    const handleThemeChange = (e) => {
        dispatch({ type: actions.CHANGE_THEME, payload: e.target.value });
    };

    const handleFontSizeChange = (e) => {
        dispatch({ type: actions.CHANGE_FONT_SIZE, payload: e.target.value });
    };

    return (
        <StyledEditorSettings>
            <SelectBox
                style={{ width: 30 }}
                onChange={handleFontSizeChange}
                value={state.editorSettings.fontSize}
            >
                {fontSizes.map((fontSize) => (
                    <option key={fontSize} value={fontSize}>
                        {fontSize}
                    </option>
                ))}
            </SelectBox>

            <SelectBox onChange={handleThemeChange} value={state.editorSettings.theme}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </SelectBox>
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

const SelectBox = styled.select`
    outline: none;
    width: 100%;
    min-width: 5ch;
    max-width: 10ch;
    border: 1px solid #777;
    border-radius: 0.25em;
    font-size: 1rem;
    cursor: pointer;
    background-color: #363636;
    color: white;
    margin: 5px;
    height: 25px;

    &:active,
    &:hover {
        outline: none;
    }

    &:active,
    &:hover {
        outline-color: red;
    }

    &::-ms-expand {
        display: none;
    }
`;

export default EditorSettings;
