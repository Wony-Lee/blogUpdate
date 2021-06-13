import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
html {
    height:auto;
}
body{
    margin:0 auto;
    width:100%;
    height:100%;
    background: linear-gradient(180deg, #6B85EA 0%, #DDCAF5 100%);
    user-select:none;
}

button{
    outline:none;
    cursor:pointer;
    border:0px;
    background:white;
    height: 30px;
    width: 80px;
  }
  input {
    outline:none;
  }
  
  .slick-slider {
    display:block;
  }
  .slick-track {
    display:flex;
  }

`;

/* Global Style */
export const Container = styled.div`
    margin: 5% 0;
`;

export const Section = styled.div`
    margin: 2% 0;
`;
export const SectionHead = styled.div`
    border: 1px solid white;
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
`;
export const HeadLeft = styled.div`
    width: 85%;
    margin-left: 20px;
`;
export const HeadRight = styled.div`
    width: 15%;
    text-align: center;
    border-left: 1px solid #ddd;
`;

export const SectionBody = styled.div`
    width: 99%;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 1%;
`;
/* Navigation Style */
export const NavContainer = styled.div`
    border-bottom: 1px solid white;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const NavMenuLogo = styled.div`
    margin-left: 2%;
    width: 28%;
    & a {
        text-decoration: none;
        color: white;
    }
    & a:hover {
        color: pink;
    }
    @media (max-width: 380px) {
        font-size: 10pt;
    }
`;
export const NavMenuContainer = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    align-items: center;
    & div {
        text-align: center;
        width: 20%;
    }
    & a {
        text-decoration: none;
        color: white;
    }
    & a:hover {
        color: pink;
    }
    @media (max-width: 380px) {
        font-size: 10pt;
    }
`;

/* Body Style */

/* Footer Style */
