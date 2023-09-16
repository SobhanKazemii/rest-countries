export interface HttpResponseI {
    alpha3Code: string;
    borders: string[];
    capital: string;
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    flags: {
        png: string;
        svg: string;
    };
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    name: string;
    nativeName: string;
    topLevelDomain: string[];
    population: number;
    region: string;
    subregion: string;
}
