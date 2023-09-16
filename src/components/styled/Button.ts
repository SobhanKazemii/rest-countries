import styled from "styled-components";

export const ButtonCm = styled.button`
    color: ${({ theme }) => theme.colors.txt_primary};
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: ${({ theme }) => theme.shadows.primary};
    cursor: pointer;
    flex: 1 1 0%;
`;
