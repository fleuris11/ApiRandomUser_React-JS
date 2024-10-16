import React from "react";
import ListeUtilisateurs from "./ListeUtilisateurs";

const App: React.FC = () => {
  return (
    <div>
            
            <h1 style={{ color: "orange" }}>Liste des 10 Premiers Utilisateurs</h1>

  <ListeUtilisateurs />

    </div>
  );
};

export default App;
