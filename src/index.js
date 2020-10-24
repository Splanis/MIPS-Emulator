import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./context/Context";
import GlobalTheme from "./components/shared/GlobalTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme/Theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <GlobalTheme />
                <App />
            </ContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
