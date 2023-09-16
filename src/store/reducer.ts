import { HttpResponseI } from "../types/httpResponse.type";
import { ActionI, ActionTypesE, StateI } from "../types/state.type";
export const reducer = (state: StateI, action: ActionI): StateI => {
    switch (action.type) {
        case ActionTypesE.fetchAllCountries:
            return {
                ...state,
                countries: action.payload.data.filter(
                    (c: HttpResponseI, index: number) => index < 8
                ),
            };

        case ActionTypesE.fetchCountry:
            return {
                ...state,
                country: action.payload.data,
            };

        case ActionTypesE.serachCountry:
            return {
                ...state,
                searchedCountry: action.payload.data.toLowerCase(),
            };

        case ActionTypesE.filterCountry:
            return {
                ...state,
                filteredRegion: action.payload.data,
            };

        case ActionTypesE.toggleTheme:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };

        default:
            return state;
    }
};

export const initialState: StateI = {
    theme: "light",
    countries: [],
    searchedCountry: "",
    filteredRegion: "",
    country: {} as HttpResponseI,
};
