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
        case actions.CHANGE_FONT_SIZE:
            return {
                ...state,
                editorSettings: {
                    ...state.editorSettings,
                    fontSize: payload,
                },
            };
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
