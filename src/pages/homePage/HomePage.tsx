import { FC, useContext, useEffect } from "react";
import { dispatchContext, stateContext } from "../../store/contexts";
import { getReq } from "../../server/api";
import { ActionTypesE } from "../../types/state.type";
import SearchBox from "../../components/shared/SearchBox";
import Card from "../../components/shared/Card";
import Dropdown from "../../components/shared/Dropdown";
import REGION_ITEMS from "../../constants/items/items.regions";
import { CountriesWrapper, HeadBoxWrapper, HomePageContainer } from "./styled";
import Loading from "../../components/shared/Loading";

const HomePage: FC = () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);

    useEffect(() => {
        getReq(
            "all/?fields=name,region,population,capital,flags,alpha3Code"
        ).then((res) =>
            dispatch({
                type: ActionTypesE.fetchAllCountries,
                payload: {
                    data: res.data,
                },
            })
        );
    }, [dispatch]);

    return (
        <HomePageContainer>
            <HeadBoxWrapper>
                <SearchBox />
                <Dropdown data={Object.values(REGION_ITEMS)} />
            </HeadBoxWrapper>
            {state.countries.length > 0 ? (
                <CountriesWrapper>
                    {state.countries
                        .filter((c) =>
                            c.name.toLowerCase().match(state.searchedCountry)
                        )
                        .filter((c) => {
                            if (state.filteredRegion === "") {
                                return c;
                            } else {
                                return c.region === state.filteredRegion;
                            }
                        })
                        .map((country) => (
                            <Card key={country.name} data={country} />
                        ))}
                </CountriesWrapper>
            ) : (
                <Loading />
            )}
        </HomePageContainer>
    );
};

export default HomePage;
