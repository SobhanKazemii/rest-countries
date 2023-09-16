import { ReactNode, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { stateContext, dispatchContext } from "./contexts";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyles from "../styles/global";

const StateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <stateContext.Provider value={state}>
                <dispatchContext.Provider value={dispatch}>
                    {children}
                </dispatchContext.Provider>
            </stateContext.Provider>
        </ThemeProvider>
    );
};

export default StateProvider;
