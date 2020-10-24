import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        type: "dark",
    },
});
