import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./context/Context";
import GlobalTheme from "./components/shared/GlobalTheme";

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <GlobalTheme />
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
