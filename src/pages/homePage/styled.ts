import styled from "styled-components";
import FlexCm from "../../components/styled/Flex";
import ContainerCm from "../../components/styled/Container";
import GridCm from "../../components/styled/Grid";

export const HeadBoxWrapper = styled(FlexCm)`
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        flex-direction: row;
    }
`;

export const HomePageContainer = styled(ContainerCm)`
    padding: 2rem 0;
`;

export const CountriesWrapper = styled(GridCm)`
    gap: 4rem;
    padding: 2rem 2rem 0 2rem;
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        padding: 2rem 0 0 0;
    }
`;
