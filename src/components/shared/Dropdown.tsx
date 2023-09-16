import { FC, useState, useContext } from "react";
import styled from "styled-components";
import { TextDesktopMain } from "../styled/Typography";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { dispatchContext, stateContext } from "../../store/contexts";
import { ActionTypesE } from "../../types/state.type";

const DropdownBox = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    width: 10rem;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    box-shadow: ${({ theme }) => theme.shadows.primary};
    cursor: pointer;
`;

const IconBox = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.txt_primary};
`;

const OpenedDropdown = styled(DropdownBox)`
    position: absolute;
    top: 115%;
    height: fit-content;
    padding: 1rem;
    flex-direction: column;
`;

const DropdwonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const DropdownItem = styled.span`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 100%;
    height: 2rem;
    border-radius: 0.25rem;
    &:hover {
        background-color: ${({ theme }) => theme.colors.bg_primary};
    }
`;

const Dropdown: FC<{ data: string[] }> = ({ data }) => {
    const state = useContext(stateContext);
    const [openDropdown, setOpenDropdown] = useState<{
        title: string;
        active: boolean;
    }>({
        title: state.filteredRegion ? state.filteredRegion : "Filter By Region",
        active: false,
    });
    const dispatch = useContext(dispatchContext);

    const handleFilterCountry = (i: string) => {
        dispatch({
            type: ActionTypesE.filterCountry,
            payload: {
                data: i,
            },
        });
        setOpenDropdown({ title: i, active: false });
    };

    const handleNoneFilterCountry = () => {
        dispatch({
            type: ActionTypesE.filterCountry,
            payload: {
                data: "",
            },
        });
        setOpenDropdown({ title: "Filter By Region", active: false });
    };

    return (
        <DropdwonWrapper>
            <DropdownBox
                onClick={() =>
                    setOpenDropdown({
                        ...openDropdown,
                        active: !openDropdown.active,
                    })
                }
            >
                <TextDesktopMain>{openDropdown.title}</TextDesktopMain>
                <IconBox>
                    {!openDropdown.active ? <BsChevronDown /> : <BsChevronUp />}
                </IconBox>
            </DropdownBox>
            {openDropdown.active && (
                <OpenedDropdown>
                    {data.map((i) => (
                        <DropdownItem
                            key={i}
                            onClick={() => handleFilterCountry(i)}
                        >
                            <TextDesktopMain>{i}</TextDesktopMain>
                        </DropdownItem>
                    ))}
                    <DropdownItem onClick={handleNoneFilterCountry}>
                        <TextDesktopMain>None</TextDesktopMain>
                    </DropdownItem>
                </OpenedDropdown>
            )}
        </DropdwonWrapper>
    );
};

export default Dropdown;
