import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  margin: 18% auto;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.75);

  border-radius: 4px;
  padding: 0.5rem 1rem;

  h1 {
    font-size: 1.1rem;
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;

    input {
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      border: 1px solid #333;
      background-color: #ffffff;
      margin: 0.2rem 0;
    }

    button {
      height: 2rem;
      border: 0;
      border-radius: 4px;
      background-color: #123;
      color: #ffffff;
      text-transform: uppercase;

      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
