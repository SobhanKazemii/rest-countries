import { FC, ChangeEvent, useContext } from "react";
import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";
import { dispatchContext, stateContext } from "../../store/contexts";
import { ActionTypesE } from "../../types/state.type";

const InputCm = styled.input`
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.txt_primary};
    font-size: ${({ theme }) => theme.typography.desktop.main.fontSize};
    font-weight: ${({ theme }) => theme.typography.desktop.main.fontWeight};
    width: 85%;
    height: 100%;
    &::placeholder {
        color: ${({ theme }) => theme.colors.bg_seondary};
    }
`;

const Search = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    /* gap: 1rem; */
    width: 100%;
    align-items: center;
    height: 3rem;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.primary};
    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
        width: 30rem;
    }
`;

const IconBox = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    color: ${({ theme }) => theme.colors.txt_primary};
`;

const SearchBox: FC = () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);

    const handleSearchCountry = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: ActionTypesE.serachCountry,
            payload: {
                data: e.target.value,
            },
        });
    };

    return (
        <Search>
            <IconBox>
                <SlMagnifier />
            </IconBox>
            <InputCm
                placeholder="Search for a country..."
                value={state.searchedCountry}
                onChange={handleSearchCountry}
            />
        </Search>
    );
};

export default SearchBox;
