import React from "react";
import bebidaImg from "../../assets/images/test.jpeg";
import { FiUpload } from "react-icons/fi";
import ModalImport from "../../components/ModalImport";
import { useModalImport } from "../../hooks/modal-import";
import { Container, ListDrinks } from "./styles";
import ItemBeer from "../../components/ItemBeer";

const standardStyles = {
  content: {
    width: "30rem",
    height: "14rem",
  },
};

const array = [1, 2, 3];

const Home: React.FC = () => {
  const { open, toggleModalImport } = useModalImport();

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
          {array.map((item) => (
            <ItemBeer
              key={item}
              img={bebidaImg}
              title="Modelo Negra"
              description="12 Unit - 33oz Bottle"
              price={32}
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
