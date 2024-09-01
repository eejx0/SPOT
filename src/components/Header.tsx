import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import PersonIcon from "../assets/PersonIcon.svg";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
    const [searchBox, setSearchBox] = useState<boolean>(false);
    return (
        <>
            <Wrapper>
                <Link to={"/"}>
                    <img src={Logo}></img>
                </Link>
                <div>
                    <SearchWrap>
                        <input
                            placeholder="내용을 검색하세요..."
                            style={{
                                width: searchBox ? "290px" : "0px",
                                opacity: searchBox ? 1 : 0,
                            }}
                        />
                        <img
                            className="icon"
                            src={SearchIcon}
                            onClick={() => {
                                setSearchBox(!searchBox);
                            }}
                        />
                    </SearchWrap>
                    <Link to={"/profile"} style={{ display: "flex", justifyContent: "center" }}>
                        <img className="icon" src={PersonIcon} />
                    </Link>
                </div>
            </Wrapper>
            <Outlet />
        </>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: white;
    justify-content: space-between;
    padding: 0 350px;
    box-sizing: border-box;
    z-index: 1000;
    height: 65px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    @media (max-width: 1200px) {
        padding: 0 70px;
    }
    > div {
        display: flex;
        gap: 36px;
    }
    > img {
        cursor: pointer;
    }
    .icon {
        width: 24px;
        cursor: pointer;
    }
`;

const SearchWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    > input {
        height: 38px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        padding-left: 15px;
        border-radius: 5px;
        font-size: 15px;
        transition: width 0.3s ease, opacity 0.3s ease;
        &:focus {
            border-color: #4579ff;
        }
    }
`;
