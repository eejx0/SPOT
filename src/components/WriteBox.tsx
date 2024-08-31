import styled from "styled-components";
import ProfileIcon from "../assets/ProfileIcon.svg";
import ImageIcon from "../assets/ImageIcon.svg";
import { useRef } from "react";

export const WriteBox = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Wrapper>
            <img src={ProfileIcon} />
            <div>
                <textarea placeholder="궁금한걸 자유롭게 물어보세요!"></textarea>
                <BottomBox>
                    <div>
                        <AddImageButton src={ImageIcon} onClick={handleImageUploadClick} />
                        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
                    </div>
                    <AddButton>게시</AddButton>
                </BottomBox>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 710px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    margin-bottom: 60px;
    gap: 27px;
    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        > textarea {
            height: 130px;
            width: 100%;
            font-size: 19px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        }
        > textarea::placeholder {
            color: rgba(0, 0, 0, 0.5);
        }
    }
    > img {
        align-self: flex-start;
        width: 45px;
    }
`;

const BottomBox = styled.div`
    display: flex;
    > div {
        margin-right: auto;
    }
`;

const AddImageButton = styled.img`
    width: 22px;
    cursor: pointer;
    margin-top: 20px;
`;

const AddButton = styled.button`
    width: 100px;
    height: 38px;
    border-radius: 30px;
    background-color: #4579ff;
    cursor: pointer;
    color: white;
    font-size: 17px;
    font-weight: 300;
    margin-left: auto;
    margin-top: 15px;
    &:hover {
        background-color: #205efb;
        transition: 0.2s;
    }
`;
