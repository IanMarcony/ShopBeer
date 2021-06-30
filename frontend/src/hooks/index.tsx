import React from "react";

import { ModalImportProvider } from "./modal-import";

const AppProvider: React.FC = ({ children }) => {
  return <ModalImportProvider>{children}</ModalImportProvider>;
};

export default AppProvider;
