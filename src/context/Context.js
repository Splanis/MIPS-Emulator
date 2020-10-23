import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

export const Context = createContext({});

const initialState = {
    editor: "",
    theme: "monokai"
};

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        reducer,
        JSON.parse(localStorage.getItem("state")) || initialState
    );

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};
