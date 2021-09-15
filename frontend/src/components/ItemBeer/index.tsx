import React from "react";

import { Container } from "./styles";

interface ItemBeerProps {
  img: string;
  title: string;
  description: string;
  price: string | number;
}

const ItemBeer: React.FC<ItemBeerProps> = ({
  img,
  title,
  description,
  price,
}) => {
  return (
    <Container>
      <img src={img} alt="Bebida" />
      <section>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <b>
          <strong>R${price}/Unit</strong>
        </b>
      </section>
    </Container>
  );
};

export default ItemBeer;
