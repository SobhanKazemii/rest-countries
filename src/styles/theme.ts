import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    fonts: {
        eng: "Nunito Sans",
        fa: "Vazirmatn",
    },
    media: {
        mobile: "412px",
        tablet: "768px",
        desktop: "1440px",
    },
    maxWidth: {
        mobile: "320px",
        tablet: "750px",
        desktop: "1400px",
    },
    typography: {
        desktop: {
            title: {
                fontSize: "16px",
                fontWeight: 800,
            },
            main: {
                fontSize: "14px",
                fontWeight: 600,
            },
            light: {
                fontSize: "14px",
                fontWeight: 300,
            },
        },
        mobile: {
            title: {
                fontSize: "14px",
                fontWeight: 800,
            },
            main: {
                fontSize: "12px",
                fontWeight: 600,
            },
            light: {
                fontSize: "12px",
                fontWeight: 300,
            },
        },
    },
    shadows: {
        primary: `0px 2px 5px 0.5px #00000021`,
    },
};

export const lightTheme = {
    ...defaultTheme,
    colors: {
        bg_primary: "hsl(0, 0%, 98%)",
        bg_secondary: "#fff",
        txt_primary: "hsl(200, 15%, 8%)",
    },
};

export const darkTheme = {
    ...defaultTheme,
    colors: {
        bg_primary: "hsl(207, 26%, 17%)",
        bg_secondary: "hsl(209, 23%, 22%)",
        txt_primary: "hsl(0, 0%, 100%)",
    },
};
