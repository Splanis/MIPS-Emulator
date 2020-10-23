import React, { useContext } from "react";

import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";
import styled from "styled-components";
import { StyledButton } from "../components/shared/Button";

const themes = ["material", "monokai"];

const Navigation = () => {
    const [state, dispatch] = useContext(Context);

    const openFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target.result;
            dispatch({ type: actions.OPEN_FILE, payload: text });
        };
        reader.readAsText(e.target.files[0]);
    };

    const handleThemeChange = (e) => {
        console.log(e);
        dispatch({ type: actions.CHANGE_THEME, payload: e.target.value });
    };

    return (
        <StyledNavigation>
            <StyledUpload
                id="upload-file"
                type="file"
                onChange={(e) => openFile(e)}
                accept="text/plain"
            />

            <StyledLabel htmlFor="upload-file">Upload File</StyledLabel>

            <StyledButton>Run</StyledButton>
            <StyledButton>Step Forward</StyledButton>

            <SelectTheme onChange={handleThemeChange} value={state.theme}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </SelectTheme>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.div`
    grid-area: navigation;
    width: 100%;
    background: black;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const StyledUpload = styled.input`
    display: none;
`;

const StyledLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c0c0c0;
    color: black;
    padding: 10px 5px;
    border: none;
    width: 120px;
    height: 35px;
    margin: 5px;
    font-size: 1rem;
const SelectTheme = styled.select`
    margin: 10px;
    width: 130px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 35px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #c0c0c0;

    &:active,
    &:hover {
        outline: none;
    }

    &:active,
    &:hover {
        outline-color: red;
    }
`;
`;

export default Navigation;
