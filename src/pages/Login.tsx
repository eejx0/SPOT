import { useState, useEffect } from "react";
import styled from "styled-components";
import GoogleIcon from "../assets/googleIcon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const navigate = useNavigate();

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    const emailCheck = () => {
        if (email.match(emailRegEx) === null) {
            setEmailError(true);
            return;
        } else {
            setEmailError(false);
        }
    };

    const onSubmit = () => {
        navigate("/");
    };

    useEffect(() => {
        emailCheck();
    }, [email]);

    return (
        <Wrapper>
            <div>
                <Title>로그인</Title>
                <InputWrapper>
                    <InputWrap>
                        <p>이메일</p>
                        <InputBox>
                            <input
                                onChange={(e: any) => {
                                    setEmail(e.target.value);
                                    emailCheck();
                                }}
                                placeholder="이메일을 입력하세요"
                                type="email"
                            ></input>
                            {emailError && <p>이메일 형식을 확인해주세요 *</p>}
                        </InputBox>
                    </InputWrap>
                    <InputWrap>
                        <p>비밀번호</p>
                        <InputBox>
                            <input placeholder="비밀번호를 입력하세요" type="password"></input>
                        </InputBox>
                    </InputWrap>
                </InputWrapper>
                <GoogleLogin>
                    <img src={GoogleIcon} />
                    <p>Google로 계속하기</p>
                </GoogleLogin>
                <LoginButton onClick={onSubmit}>로그인</LoginButton>
                <SignUpButtonWrap>
                    <p>아직 회원이 아니라면?</p>
                    <Link to={"/signUp"}>
                        <p className="signUp">회원가입 하기</p>
                    </Link>
                </SignUpButtonWrap>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    > div {
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 68px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    > p {
        font-size: 17px;
    }
`;

const InputBox = styled.div`
    > input {
        border: 1px solid #cecece;
        border-radius: 5px;
        width: 400px;
        height: 42px;
        padding-left: 15px;
        font-size: 17px;
        &:focus {
            border: 1px solid #4579ff;
        }
    }
    > input::placeholder {
        color: rgba(0, 0, 0, 0.24);
    }
    > p {
        font-size: 15px;
        margin-top: 10px;
        color: red;
    }
`;

const GoogleLogin = styled.button`
    width: 415px;
    height: 45px;
    border-radius: 30px;
    border: 1px solid #cecece;
    margin-top: 72px;
    cursor: pointer;
    background-color: white;
    position: relative;
    &:hover {
        background-color: #ececec;
        transition: 0.2s;
    }
    > img {
        position: absolute;
        left: 25px;
        width: 30px;
        transform: translate(-50%, -50%);
    }

    > p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 17px;
    }
`;

const LoginButton = styled.button`
    width: 415px;
    height: 45px;
    border-radius: 5px;
    margin-top: 31px;
    background-color: #4579ff;
    font-size: 17px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #205efb;
        transition: 0.2s;
    }
`;

const SignUpButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
    .signUp {
        color: #4579ff;
        cursor: pointer;
    }
`;
