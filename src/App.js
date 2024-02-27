import "./App.css";
import React from "react";
import Rute from "rute";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

function App() {
  const value = {
    inputStyle: "filled",
    zIndex: {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
      toast: 1200, // toast
    },
    autoZIndex: true,
  };

  return (
    <PrimeReactProvider value={value}>
      <Rute />
    </PrimeReactProvider>
  );
}

export default App;
