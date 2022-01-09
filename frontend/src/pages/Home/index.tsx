import React, { useEffect, useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import ModalImport from "../../components/ModalImport";
import { useModalImport } from "../../hooks/modal-import";
import { Container, ListDrinks } from "./styles";
import ItemBeer from "../../components/ItemBeer";
import api from "../../services/api";
import { useDrinks } from "../../hooks/drinks";

const standardStyles = {
  content: {
    width: "30rem",
    height: "14rem",
  },
};

const Home: React.FC = () => {
  const { open, toggleModalImport } = useModalImport();
  const { listDrink, addListDrink } = useDrinks();

  const loadDrinksList = useCallback(async () => {
    const { data } = await api.get("/drinks");
    addListDrink(data);
  }, [addListDrink]);

  useEffect(() => {
    loadDrinksList();
  }, []);

  return (
    <>
      <Container>
        <nav>
          <button type="button" onClick={() => toggleModalImport()}>
            <FiUpload size={20} />
          </button>
        </nav>
        <h1>Shop beer</h1>
        <ListDrinks>
          {listDrink.map((item) => (
            <ItemBeer
              key={item.id}
              img={api.defaults.baseURL + item.image_url}
              title={item.title}
              description={item.description}
              price={item.value}
            />
          ))}
        </ListDrinks>
      </Container>

      <ModalImport
        isOpen={open}
        onRequestClose={() => toggleModalImport()}
        style={standardStyles}
      />
    </>
  );
};

export default Home;
