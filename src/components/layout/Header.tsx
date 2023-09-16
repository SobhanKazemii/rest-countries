import { FC, useContext } from "react";
import styled from "styled-components";
import ContainerCm from "../styled/Container";
import FlexCm, { KeyValueFlex } from "../styled/Flex";
import { BsMoon } from "react-icons/bs";
import { TextDesktopMain, Title } from "../styled/Typography";
import { dispatchContext } from "../../store/contexts";
import { ActionTypesE } from "../../types/state.type";
import { Link } from "react-router-dom";

const HeaderCm = styled.header`
    background-color: ${({ theme }) => theme.colors.bg_secondary};
    padding: 1.5rem 0;
    box-shadow: ${({ theme }) => theme.shadows.primary};
`;

const HeaderFlexWrapper = styled(FlexCm)`
    justify-content: space-between;
`;

const ThemeSwitcher = styled.div`
    cursor: pointer;
`;

const Header: FC = () => {
    const dispatch = useContext(dispatchContext);

    const handleChangeTheme = () => {
        dispatch({
            type: ActionTypesE.toggleTheme,
            payload: {
                data: null,
            },
        });
    };
    return (
        <HeaderCm>
            <ContainerCm>
                <HeaderFlexWrapper>
                    <Link to="/">
                        <Title>Where in the world?</Title>
                    </Link>
                    <ThemeSwitcher>
                        <KeyValueFlex onClick={handleChangeTheme}>
                            <BsMoon />
                            <TextDesktopMain>Dark Mode</TextDesktopMain>
                        </KeyValueFlex>
                    </ThemeSwitcher>
                </HeaderFlexWrapper>
            </ContainerCm>
        </HeaderCm>
    );
};

export default Header;
