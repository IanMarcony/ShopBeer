import React, { useState, useContext, createContext } from "react";
import { useCallback } from "react";

interface ModalImportData {
  open: boolean;
  toggleModalImport(): void;
}

const ModalImportContext = createContext<ModalImportData>(
  {} as ModalImportData
);

const ModalImportProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleModalImport = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <ModalImportContext.Provider value={{ open, toggleModalImport }}>
      {children}
    </ModalImportContext.Provider>
  );
};

const useModalImport = function (): ModalImportData {
  const context = useContext(ModalImportContext);

  if (!context) {
    throw new Error("useModalImport must be used within ModalImportProvider");
  }

  return context;
};

export { useModalImport, ModalImportProvider };
