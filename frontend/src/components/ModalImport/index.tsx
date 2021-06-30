import React, { FormEvent } from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Props } from "react-modal";
import { useModalImport } from "../../hooks/modal-import";

import { Container } from "./styles";

const ModalImport: React.FC<Props> = ({ children, ...rest }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricing, setPricing] = useState("");

  const { toggleModalImport } = useModalImport();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      toggleModalImport();
    },
    [toggleModalImport]
  );

  return (
    <Container {...rest}>
      <h1>Adicionar novo registro</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="Preço"
          value={pricing}
          onChange={(event) => setPricing(event.target.value)}
        />
        <input type="file" />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default ModalImport;
