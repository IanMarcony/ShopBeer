import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  place-items: center;

  nav {
    display: flex;
    width: 100%;

    button {
      margin-left: auto;

      width: 2rem;
      height: 2rem;

      border: 0;
      background-color: #ddd;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const ListDrinks = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  padding: 0.625rem;

  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.5rem;
  > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 25rem;
    border-radius: 4px;

    -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      width: 15rem;
      height: 15rem;
      object-fit: contain;
    }
    section {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: stretch;
      padding: 0 0.625rem;
      margin-top: 1.3rem;
      h1 {
        font-size: 2rem;
        color: #000;
      }
      h2 {
        font-size: 1.5rem;
        color: #878a89;
      }

      strong {
        font-size: 1.2rem;
      }

      a {
        margin-top: 0.2rem;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      a:visited {
        color: #878a89;
      }
    }
  }
`;
export const PromoText = styled.div`
  color: rgb(54, 149, 89);
`;
