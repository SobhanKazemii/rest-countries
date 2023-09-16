import styled from "styled-components";

const GridCm = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }
`;

export default GridCm;
