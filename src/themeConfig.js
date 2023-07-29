import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        text: {
            primary:{
                main: "#ffffff"
            },
        },
        background: "linear-gradient(rgb(26, 22, 22), grey, grey)",
    },
});


export const customThemeDark = createTheme({
    palette: {
        text: {
            primary:{
                main: "#000000"
            },
        },
        background: "grey",
},
});