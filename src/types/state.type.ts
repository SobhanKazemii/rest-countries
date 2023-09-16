import { HttpResponseI } from "./httpResponse.type";

export interface StateI {
    theme: string;
    countries: HttpResponseI[];
    searchedCountry: string;
    filteredRegion: string;
    country: HttpResponseI;
}

export enum ActionTypesE {
    fetchAllCountries = "FTECH_ALL_COUNTERIES",
    fetchCountry = "FTECH_COUNTERY",
    serachCountry = "SEARCH_COUNTERY",
    filterCountry = "FILTER_COUNTRY",
    toggleTheme = "TOGGLE_THEME",
}

export interface ActionI {
    type: ActionTypesE;
    payload: {
        data: any;
    };
}
