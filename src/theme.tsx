import { createTheme } from '@mui/material/styles'

const customColors = {
    dark: "#33475B",
    white: "#F5F8FA",
    light: "#F5F8FA",
    grey: "#EAF0F6",
    greyDark: "#CBD6E2",
    blue: "#239AB5",
    orange: "#FF7A59",
    orangeLight: "#FF6A59"
}

export const theme = createTheme({
    palette: {
        primary: {
            main: customColors.orange,
            light: customColors.orangeLight,
        },
        secondary: {
            main: customColors.blue,
        },
        text: {
            primary: customColors.dark,
        },
        info: {
            main: customColors.grey,
        },
        background: {
            default: customColors.white,
            paper: customColors.light,
        }
    },
    typography: {
        fontFamily: 'Lexend Deca',
        h1: {
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 700,
            color: customColors.dark
        },
        h2: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 700,
            color: customColors.dark
        },
        h3: {
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: 400,
            color: customColors.dark
        },
        body1: {
            fontSize: '12px',
            lineHeight: '24px',
            fontWeight: 400,
            color: customColors.dark
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    minWidth: '250px',
                    borderRadius: '5px',
                    background: customColors.grey,
                    "& label.Mui-focused": {
                        color: customColors.dark
                    },
                    "&:hover": {
                        "& label": {
                            color: customColors.dark
                        },
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: customColors.greyDark
                            },
                            "& fieldset": {
                                borderColor: customColors.greyDark
                            }
                        }
                    },
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                            borderColor: customColors.greyDark
                        },
                        "& fieldset": {
                            borderColor: customColors.greyDark
                        }
                    },
                    "& .MuiInputLabel-root": {
                        color: customColors.dark
                    }
                }
            }
        }
    }
})