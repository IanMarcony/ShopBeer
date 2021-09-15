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

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const ListDrinks = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  padding: 0.625rem;

  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.5rem;
`;
export const PromoText = styled.div`
  color: rgb(54, 149, 89);
`;
