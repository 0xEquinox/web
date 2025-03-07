import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media(max-width: 600px) {
        background: ${({ theme }) => theme.palette.primary[800]};
    }
`;


const Room: FC = () => {
    const router = useRouter();

    const { roomId } = router.query;

    return (
        <Wrapper>
            <p>Room with room id {roomId}</p>
        </Wrapper>
    );
};

export default Room;