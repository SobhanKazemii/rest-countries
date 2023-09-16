import { FC, useContext, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getReq } from "../../server/api";
import { ButtonCm } from "../../components/styled/Button";
import { LiaArrowLeftSolid } from "react-icons/lia";
import {
    TextDesktopMain,
    TextDesktopTitle,
} from "../../components/styled/Typography";
import { dispatchContext, stateContext } from "../../store/contexts";
import { ActionTypesE } from "../../types/state.type";
import Loading from "../../components/shared/Loading";
import {
    BackBtnContentWrapper,
    BorderButtonLink,
    BordersBox,
    BordersBoxWrapper,
    ContentWrapper,
    DetailsBox,
    GridInfoColumn,
    IconBox,
    SingleFlag,
    InfoColumnWrapper,
    SinglePageContainer,
    SinglePageInfoBox,
} from "./styled";
import KeyValue from "../../components/shared/KeyValue";

const SinglePage: FC = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const dispatch = useContext(dispatchContext);
    const state = useContext(stateContext);

    useLayoutEffect(() => {
        getReq(`/alpha/${code}`).then((res) =>
            dispatch({
                type: ActionTypesE.fetchCountry,
                payload: {
                    data: res.data,
                },
            })
        );
        return () =>
            dispatch({
                type: ActionTypesE.fetchCountry,
                payload: {
                    data: {},
                },
            });
    }, [code, dispatch]);

    if (state.country.flags === undefined) return <Loading />;

    return (
        <SinglePageContainer>
            <ButtonCm onClick={() => navigate(-1)}>
                <BackBtnContentWrapper>
                    <IconBox>
                        <LiaArrowLeftSolid />
                    </IconBox>
                    <TextDesktopMain>Back</TextDesktopMain>
                </BackBtnContentWrapper>
            </ButtonCm>
            <ContentWrapper>
                <SingleFlag
                    src={state.country.flags.png}
                    alt={state.country.name}
                />
                <SinglePageInfoBox>
                    <h1>{state.country.name}</h1>
                    <DetailsBox>
                        <GridInfoColumn>
                            <InfoColumnWrapper>
                                <KeyValue
                                    label="Native Name:"
                                    value={state.country.nativeName}
                                />
                                <KeyValue
                                    label="Population:"
                                    value={state.country.population}
                                />
                                <KeyValue
                                    label="Region:"
                                    value={state.country.region}
                                />
                                <KeyValue
                                    label="Sub Region:"
                                    value={state.country.subregion}
                                />
                                <KeyValue
                                    label="Capital:"
                                    value={state.country.capital}
                                />
                            </InfoColumnWrapper>
                        </GridInfoColumn>
                        <GridInfoColumn>
                            <InfoColumnWrapper>
                                <KeyValue
                                    label="Top Level Domain:"
                                    value={state.country.topLevelDomain[0]}
                                />
                                <KeyValue
                                    label="Currencies:"
                                    value={
                                        Object.values(
                                            state.country.currencies
                                        )[0].name
                                    }
                                />
                                <KeyValue
                                    label="Languages:"
                                    value={Object.values(
                                        state.country.languages
                                    ).map((i) => i.name + ", ")}
                                />
                            </InfoColumnWrapper>
                        </GridInfoColumn>
                    </DetailsBox>
                    {state.country.borders && (
                        <BordersBoxWrapper>
                            <TextDesktopTitle>
                                Border Countries:
                            </TextDesktopTitle>
                            <BordersBox>
                                {state.country.borders.map((b) => (
                                    <BorderButtonLink key={b}>
                                        <Link to={`/${b}`}>
                                            <TextDesktopMain>
                                                {b}
                                            </TextDesktopMain>
                                        </Link>
                                    </BorderButtonLink>
                                ))}
                            </BordersBox>
                        </BordersBoxWrapper>
                    )}
                </SinglePageInfoBox>
            </ContentWrapper>
        </SinglePageContainer>
    );
};

export default SinglePage;
