import React, { useContext, useState } from "react";

import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";
import { StyledButton } from "../components/shared/Button";
import styled from "styled-components";

const themes = ["material", "monokai"];

const Navigation = () => {
    const [state, dispatch] = useContext(Context);
    const [downloading, setDownloading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [filesDropDown, setFilesDropDown] = useState(false);

    const nameFile = () => {
        setDownloading(true);
    };

    const openFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.fileName = e.target.files[0].name;
        reader.onload = async (e) => {
            const text = e.target.result;
            dispatch({
                type: actions.OPEN_FILE,
                payload: { editor: text, fileName: e.target.fileName },
            });
        };
        reader.readAsText(e.target.files[0]);
        setFilesDropDown(false);
    };

    const downloadFile = () => {
        if (state.openFile || fileName) {
            let file = new Blob([state.editor], { type: "text/plain;charset=utf-8" });
            let atag = document.createElement("a");
            atag.href = URL.createObjectURL(file);
            atag.download = fileName;
            atag.click();
            setDownloading(false);
            setFileName("");
        }
        setFilesDropDown(false);
    };

    const closeFile = () => {
        dispatch({ type: actions.CLOSE_FILE });
        setFilesDropDown(false);
    };

    const handleThemeChange = (e) => {
        dispatch({ type: actions.CHANGE_THEME, payload: e.target.value });
    };

    return (
        <StyledNavigation>
            <Dropdown>
                <DropDownButton onClick={() => setFilesDropDown((prev) => !prev)}>
                    Files
                </DropDownButton>
                <DropwDownContent filesDropDown={filesDropDown}>
                    <DropdownItems>
                        <input
                            style={{ display: "none" }}
                            id="upload-file"
                            type="file"
                            onChange={(e) => {
                                openFile(e);
                                setFileName(e.target.files[0].name);
                            }}
                            accept="text/plain"
                        />
                        <StyledLabel htmlFor="upload-file">Open</StyledLabel>
                    </DropdownItems>
                    <DropdownItems>
                        <StyledButton
                            disabled={state.openFile || fileName ? false : true}
                            onClick={downloadFile}
                        >
                            Save
                        </StyledButton>
                    </DropdownItems>
                    <DropdownItems>
                        {downloading ? (
                            <>
                                <StyledInput
                                    placeholder="filename"
                                    value={fileName}
                                    onChange={(e) => setFileName(e.target.value)}
                                />
                                <DownloadButton onClick={downloadFile}>+</DownloadButton>
                            </>
                        ) : (
                            <StyledButton onClick={nameFile}>Save As</StyledButton>
                        )}
                    </DropdownItems>
                    <DropdownItems>
                        <StyledButton
                            disabled={state.openFile || fileName ? false : true}
                            onClick={closeFile}
                        >
                            Close
                        </StyledButton>
                    </DropdownItems>
                </DropwDownContent>
            </Dropdown>

            <StyledButton>Run</StyledButton>

            <StyledButton>Step Forward</StyledButton>

            <SelectTheme onChange={handleThemeChange} value={state.editorSettings.theme}>
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

    &:hover {
        cursor: pointer;
    }
`;

const StyledInput = styled.input`
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
    position: relative;
`;

const DownloadButton = styled.button`
    position: absolute;
`;

const SelectTheme = styled.select`
    width: 130px;
    margin: 5px;
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

const Dropdown = styled.div`
    margin: 5px;
`;

const DropwDownContent = styled.div`
    display: ${(props) => (props.filesDropDown ? "flex" : "none")};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    flex-direction: column;
`;

const DropDownButton = styled(StyledButton)`
    margin: 0;
`;

const DropdownItems = styled.div`
    text-decoration: none;
    background: #c0c0c0;
    border: none;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }
`;

export default Navigation;
