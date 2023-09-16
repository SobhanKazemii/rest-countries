import { FC } from "react";
import styled from "styled-components";
import { HttpResponseI } from "../../types/httpResponse.type";
import FlexCm, { KeyValueFlex } from "../styled/Flex";
import {
    TextDesktopLight,
    TextDesktopMain,
    TextDesktopTitle,
} from "../styled/Typography";
import { Link } from "react-router-dom";
import ImageCm from "../styled/Image";

const CardCm = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span 4 / span 4;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.primary};
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        grid-column: span 3 / span 3;
    }
`;

const HomeFlag = styled(ImageCm)`
    height: 10rem;
`;

const ContentWrapper = styled.div`
    padding: 1rem 1rem 3rem 1rem;
    color: ${({ theme }) => theme.colors.txt_primary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CardInfoWrapper = styled(FlexCm)`
    flex-direction: column;
    gap: 0.25rem;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Card: FC<{ data: HttpResponseI }> = ({ data }) => {
    return (
        <CardCm>
            <Link to={`/${data.alpha3Code}`}>
                <HomeFlag src={data.flags.png} alt={data.name} />
                <ContentWrapper>
                    <TextDesktopTitle>{data.name}</TextDesktopTitle>
                    <CardInfoWrapper>
                        <KeyValueFlex>
                            <TextDesktopMain>Population:</TextDesktopMain>
                            <TextDesktopLight>
                                {data.population}
                            </TextDesktopLight>
                        </KeyValueFlex>
                        <KeyValueFlex>
                            <TextDesktopMain>Region:</TextDesktopMain>
                            <TextDesktopLight>{data.region}</TextDesktopLight>
                        </KeyValueFlex>
                        <KeyValueFlex>
                            <TextDesktopMain>Capital:</TextDesktopMain>
                            <TextDesktopLight>{data.capital}</TextDesktopLight>
                        </KeyValueFlex>
                    </CardInfoWrapper>
                </ContentWrapper>
            </Link>
        </CardCm>
    );
};

export default Card;
