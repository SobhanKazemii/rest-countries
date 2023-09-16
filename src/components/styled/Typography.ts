import styled from "styled-components";

export const TextDesktopTitle = styled.h1(
    ({ theme }) => `
        font-size: ${theme.typography.desktop.title.fontSize};
        font-weight: ${theme.typography.desktop.title.fontWeight};
    `
);

export const TextDesktopMain = styled.p(
    ({ theme }) => `
        font-size: ${theme.typography.desktop.main.fontSize};
        font-weight: ${theme.typography.desktop.main.fontWeight};
    `
);

export const TextDesktopLight = styled.p(
    ({ theme }) => `
        font-size: ${theme.typography.desktop.light.fontSize};
        font-weight: ${theme.typography.desktop.light.fontWeight};
    `
);

export const Title = styled.h1`
    font-size: 1rem;
    font-weight: 800;
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        font-size: 1.5rem;
        font-weight: 800;
    }
`;
