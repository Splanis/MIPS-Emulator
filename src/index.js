import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./context/Context";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme/Theme";
import GlobalTheme from "./components/shared/GlobalTheme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <ContextProvider>
            <GlobalTheme />
            <App />
        </ContextProvider>
    </ThemeProvider>,
    document.getElementById("root")
);
