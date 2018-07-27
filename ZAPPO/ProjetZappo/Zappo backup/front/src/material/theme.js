import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#57687c",
            main: "#2c3e50",
            dark: "#031828",
            contrastText: "#fff"
        },
        secondary: {
            light: "#f96b55",
            main: "#c0392b",
            dark: "#890001",
            contrastText: "#fff"
        }
    }
});
export default theme;