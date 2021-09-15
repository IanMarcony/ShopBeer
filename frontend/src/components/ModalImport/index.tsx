import React, { FormEvent } from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Props } from "react-modal";
import { useModalImport } from "../../hooks/modal-import";

import { Container } from "./styles";

interface FormData {
  title: string;
  description: string;
  pricing: number;
  filename: string;
}

const ModalImport: React.FC<Props> = ({ children, ...rest }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricing, setPricing] = useState(0);
  const [file, setFile] = useState<FileList | null>({} as FileList);

  const { toggleModalImport } = useModalImport();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (file == null) {
        console.log("Import a file");
        return;
      }

      const filename = file.item(0)?.name;
      const data: FormData = {
        title,
        description,
        pricing,
        filename: filename || "",
      };

      console.table(data);

      toggleModalImport();
    },
    [description, pricing, title, file, toggleModalImport]
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
          onChange={(event) =>
            setPricing(
              parseInt(event.target.value === "" ? "0" : event.target.value)
            )
          }
        />
        <input type="file" onChange={(event) => setFile(event.target.files)} />

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default ModalImport;
