import React, { useState } from "react";
import bebidaImg from "../../assets/images/test.jpeg";
import { FiUpload } from "react-icons/fi";
import { Container, ListDrinks } from "./styles";
import ModalImport from "../../components/ModalImport";
import { useModalImport } from "../../hooks/modal-import";

const standardStyles = {
  content: {
    width: "30rem",
    height: "14rem",
  },
};

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
        <ListDrinks>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
          <div>
            <img src={bebidaImg} alt="Bebida" />
            <section>
              <h1>Modelo Negra</h1>
              <h2>12 Unit - 33oz Bottle</h2>
              <b>
                <strong>RD$ 32.00/Unit</strong>
              </b>
            </section>
          </div>
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
