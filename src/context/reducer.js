import * as actions from "./actionTypes";
import { calculateFileName } from "../utils/functions";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        // handle editor
        case actions.SET_EDITOR:
            return {
                ...state,
                editor: {
                    ...state.editor,
                    files: state.editor.files.map((file, index) => {
                        if (index === payload.currentFile) {
                            return { ...file, content: payload.content };
                        } else return file;
                    }),
                },
            };
        // handle files
        case actions.OPEN_FILE:
            return {
                ...state,
                editor: {
                    ...state.editor,
                    currentFile: state.editor.files.length - 1,
                    files: [
                        ...state.editor.files,
                        {
                            content: payload.content,
                            fileName: payload.fileName,
                        },
                    ],
                },
            };
        case actions.CLOSE_FILE:
            console.log(payload);
            console.log(state);
            return {
                ...state,
                editor: {
                    currentFile: state.editor.currentFile - 1,
                    files: state.editor.files.filter((file) => file.id !== payload),
                },
            };
        case actions.NEW_FILE:
            const { files } = state.editor;

            return {
                ...state,
                editor: {
                    currentFile: state.editor.files.length,
                    files: [
                        ...state.editor.files,
                        {
                            id: state.editor.files.length,
                            content: "",
                            fileName: calculateFileName(files, "Untitled.asm"),
                        },
                    ],
                },
            };
        case actions.CHANGE_FILE:
            return {
                ...state,
                editor: { ...state.editor, currentFile: payload },
            };
        // handle editor settings
        case actions.CHANGE_THEME:
            return { ...state, editorSettings: { ...state.editorSettings, theme: payload } };
        case actions.CHANGE_FONT_SIZE:
            return {
                ...state,
                editorSettings: {
                    ...state.editorSettings,
                    fontSize: payload,
                },
            };
        // handle sidebar
        case actions.CHANGE_NUMERAL_SYSTEM:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    numeralSystem: payload,
                },
            };
        case actions.TOGGLE_SIDE_BAR:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    visible: !state.sidebar.visible,
                },
            };
        default:
            return state;
    }
};
