import styled from "styled-components";
import { PostBox } from "../components/PostBox";
import { WriteBox } from "../components/WriteBox";

export const Home = () => {
    return (
        <Wrapper>
            <Wrap>
                <WriteBox />
                <PostBox />
            </Wrap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrap = styled.div`
    margin-top: 90px;
`;
