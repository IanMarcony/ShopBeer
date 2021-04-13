import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const ListDrinks = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 10px;

  > div {
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 100%;
    border-radius: 4px;

    -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      /* width: 100%; */
      object-fit: cover;
    }
    section {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: stretch;
      padding: 0 10px;
      margin-top: 5px;
      h1 {
        color: #000;
      }
      h2 {
        color: #878a89;
      }
    }
  }
`;
export const PromoText = styled.div`
  color: rgb(54, 149, 89);
`;
