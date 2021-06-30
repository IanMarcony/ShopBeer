import React from "react";
import Modal from "react-modal";
import AppProvider from "./hooks";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";

Modal.setAppElement("#root");
const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
