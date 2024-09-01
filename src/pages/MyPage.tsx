import styled from "styled-components";
import ProfileIcon from "../assets/ProfileIcon.svg";
import EditIcon from "../assets/EditIcon.svg";
import { PostBox } from "../components/PostBox";
import { useRef } from "react";

export const MyPage = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <Wrapper>
            <Wrap>
                <div>
                    <img src={ProfileIcon} style={{ width: "160px" }} alt="" />
                    <EditButton onClick={handleImageUploadClick}>
                        <img src={EditIcon} alt="" />
                        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
                    </EditButton>
                </div>
                <p>의진</p>
                <PostBox />
                <PostBox />
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
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
        position: relative;
    }
    > p {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 70px;
    }
`;

const EditButton = styled.div`
    width: 38px;
    height: 38px;
    background-color: white;
    border-radius: 30px;
    position: absolute;
    left: 120px;
    bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ececec;
        transition: 0.2s;
    }
`;
