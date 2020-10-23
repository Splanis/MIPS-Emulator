import * as actions from "./actionTypes";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.OPEN_FILE:
            return { ...state, editor: payload };
        case actions.SET_EDITOR:
            return { ...state, editor: payload };
        case actions.CHANGE_THEME:
            console.log("?");
            return { ...state, theme: payload };
        default:
            return state;
    }
};
