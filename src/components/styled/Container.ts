import styled from "styled-components";

const ContainerCm = styled.div`
    max-width: ${({ theme }) => theme.maxWidth.mobile};
    margin: auto;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        max-width: ${({ theme }) => theme.maxWidth.tablet};
    }
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        max-width: ${({ theme }) => theme.maxWidth.desktop};
    }
`;

export default ContainerCm;
