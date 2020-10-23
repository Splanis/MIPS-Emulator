import * as actions from "./actionTypes";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.OPEN_FILE:
            return { ...state, editor: payload.editor, openFile: payload.fileName };
        case actions.SET_EDITOR:
            return { ...state, editor: payload };
        case actions.CLOSE_FILE:
            return { ...state, editor: "", openFile: null };
        case actions.CHANGE_THEME:
            return { ...state, editorSettings: { ...state.editorSettings, theme: payload } };
        case actions.DECREMENT_FONT_SIZE:
            return {
                ...state,
                editorSettings: {
                    ...state.editorSettings,
                    fontSize: parseInt(state.editorSettings.fontSize) - 1,
                },
            };
        case actions.INCREMENT_FONT_SIZE:
            return {
                ...state,
                editorSettings: {
                    ...state.editorSettings,
                    fontSize: parseInt(state.editorSettings.fontSize) + 1,
                },
            };
        default:
            return state;
    }
};
