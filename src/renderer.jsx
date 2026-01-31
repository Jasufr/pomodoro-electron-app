import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx"; // Importe le composant que vous avez créé
import "./index.css"; // Si vous avez du CSS global

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Vous pouvez supprimer tout l'ancien code "Hello world" qui s'y trouvait.
