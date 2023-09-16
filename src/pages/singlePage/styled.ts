import styled from "styled-components";
import ContainerCm from "../../components/styled/Container";
import FlexCm from "../../components/styled/Flex";
import GridCm from "../../components/styled/Grid";
import { ButtonCm } from "../../components/styled/Button";
import ImageCm from "../../components/styled/Image";

export const SinglePageContainer = styled(ContainerCm)`
    padding: 3rem 0 3rem 0;
`;

export const IconBox = styled.div`
    display: flex;
    font-size: 1rem;
`;

export const SingleFlag = styled(ImageCm)`
    grid-column: span 4 / span 4;
    height: 20rem;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        grid-column: span 8 / span 8;
        height: 23rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        grid-column: span 6 / span 6;
        height: 23rem;
    }
`;

export const DetailsBox = styled.div`
    display: grid;
    gap: 2rem;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

export const BackBtnContentWrapper = styled(FlexCm)`
    gap: 0.5rem;
`;

export const InfoColumnWrapper = styled(FlexCm)`
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const GridInfoColumn = styled.div`
    grid-column: span 4 / span 4;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        grid-column: span 2 / span 2;
    }
`;

export const BordersBoxWrapper = styled(FlexCm)`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`;

export const BordersBox = styled(FlexCm)`
    gap: 1rem;
    flex-wrap: wrap;
`;

export const ContentWrapper = styled(GridCm)`
    gap: 3rem;
    align-items: center;
    padding: 3rem 0 0 0;
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        gap: 5rem;
    }
`;

export const BorderButtonLink = styled(ButtonCm)`
    display: flex;
    padding: 0;
    justify-content: center;
    a {
        width: 100%;
        text-align: center;
        padding: 0.5rem 2rem;
        text-align: center;
    }
`;

export const SinglePageInfoBox = styled.div`
    grid-column: span 4 / span 4;
    gap: 3rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        grid-column: span 8 / span 8;
    }
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        grid-column: span 6 / span 6;
    }
`;
