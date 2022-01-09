import React, { FormEvent } from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Props } from "react-modal";
import { useModalImport } from "../../hooks/modal-import";
import api from "../../services/api";

import { Container } from "./styles";

interface FormData {
  title: string;
  description: string;
  value: number;
  image: File;
}

const ModalImport: React.FC<Props> = ({ children, ...rest }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [file, setFile] = useState<FileList | null>({} as FileList);

  const { toggleModalImport } = useModalImport();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (file == null) {
        alert("Import a file");
        return;
      }
      const fileImage = file.item(0);

      if (fileImage === null) {
        alert("Import a file");
        return;
      }

      const filename = fileImage.name;

      const extensionFilename = filename.split(".");
      if (
        extensionFilename &&
        extensionFilename[extensionFilename.length - 1] !== "jpg"
      ) {
        if (
          extensionFilename &&
          extensionFilename[extensionFilename.length - 1] !== "jpeg"
        ) {
          alert("Import a Image");
          return;
        }
      }

      const formData = new FormData();

      const data: FormData = {
        title,
        description,
        value,
        image: fileImage,
      };

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("value", data.value.toString());
      formData.append("image", data.image);

      const response = await api.post("/drinks", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);

      setTitle("");
      setDescription("");
      setValue(0);
      setFile(null);

      toggleModalImport();
    },
    [description, value, title, file, toggleModalImport]
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
          value={value}
          onChange={(event) =>
            setValue(
              parseInt(event.target.value === "" ? "0" : event.target.value)
            )
          }
        />
        <input
          type="file"
          accept="image/jpeg"
          onChange={(event) => setFile(event.target.files)}
        />

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default ModalImport;
