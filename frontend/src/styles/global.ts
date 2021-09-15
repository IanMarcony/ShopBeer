import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:#fff;
    color:#000;
    -webkit-font-smoothing:antialiased;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  #root{
    padding: 40px 20px;
  }

  body,input, button{
    font-family: 'Roboto', sans-serif;
    font-size:1rem;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-family: 'Roboto', sans-serif;

    font-weight:500;
  }
  button,a {
    cursor:pointer;
  }
`;
