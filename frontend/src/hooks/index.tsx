import React from "react";
import { DrinksProvider } from "./drinks";

import { ModalImportProvider } from "./modal-import";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ModalImportProvider>
      <DrinksProvider>{children}</DrinksProvider>
    </ModalImportProvider>
  );
};

export default AppProvider;
