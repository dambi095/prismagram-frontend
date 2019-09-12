import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// styled-components 의 최신 방식으로 만드는 global styles
export default createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    }
    a {
        color: ${props => props.theme.blueColor};
        text-decoration: none;
    }
`;