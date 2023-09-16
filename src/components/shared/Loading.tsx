import { FC } from "react";
import { HashLoader } from "react-spinners";
import styled from "styled-components";

const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.bg_primary};
    opacity: 0.8;
`;

const Loading: FC = () => {
    return (
        <LoadingWrapper>
            <HashLoader color="red" />
        </LoadingWrapper>
    );
};

export default Loading;
