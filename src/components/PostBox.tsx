import styled from "styled-components";
import ProfileIcon from "../assets/ProfileIcon.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";
import TestImg from "../assets/TestImg.png";
import CommentIcon from "../assets/CommentIcon.svg";

export const PostBox = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Wrap>
                    <ProfileWrap>
                        <img src={ProfileIcon} />
                        <p>의진</p>
                    </ProfileWrap>
                    <img src={DeleteIcon} />
                </Wrap>
                <Texts>
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                    voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
                    aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                    recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </Texts>
                <img src={TestImg} alt="" />
            </HeaderWrapper>
            <CommentWrapper>
                <p>댓글 보기</p>
                <img src={CommentIcon} alt="" />
            </CommentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 60px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 690px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    height: 100%;
    border-radius: 10px;
    gap: 25px;
    > img {
        border-radius: 5px;
    }
`;

const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    > img {
        width: 45px;
        cursor: pointer;
    }
    > p {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-left: auto;
        cursor: pointer;
    }
`;

const Texts = styled.p`
    font-size: 18px;
`;

const CommentWrapper = styled.div`
    display: flex;
    gap: 7px;
    > p {
        font-size: 16px;
        cursor: pointer;
    }
    > img {
        width: 20px;
        cursor: pointer;
    }
`;
