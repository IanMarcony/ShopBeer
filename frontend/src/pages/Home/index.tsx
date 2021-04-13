import React from "react";
import bebidaImg from "../../assets/images/test.jpeg";
import { Container, ListDrinks } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ListDrinks>
        <div>
          <img src={bebidaImg} alt="Bebida" />
          <section>
            <h1>Modelo Negra</h1>
            <h2>12 Unit - 33oz Bottle</h2>
            <strong>RD$ 32.00/Unit</strong>
            <a href="/">View details</a>
          </section>
        </div>
      </ListDrinks>
    </Container>
  );
};

export default Home;
