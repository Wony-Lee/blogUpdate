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

export const Section = styled.div`
    height: 1920px;
`;
