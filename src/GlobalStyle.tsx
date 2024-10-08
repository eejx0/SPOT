import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Pretendard";
        user-select: none;
        text-decoration: none;
        ::-webkit-scrollbar {
            width: 1px;
        }
    }

    input, textarea, button {
        border: none;
        outline: none;
        resize: none;
    }
`;
