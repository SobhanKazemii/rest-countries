import axios from "axios";

const request = axios.create({
    baseURL: "https://restcountries.com/v2/",
});

export const getReq = async (url: string) => {
    return await request.get(url);
};

export const postReq = async (url: string, data: object) => {
    return await request.post(url, data);
};
