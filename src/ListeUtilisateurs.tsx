

import React, { Fragment, useEffect, useState } from "react";

//(affichage avec Ext-JSON Viewer Pro) les données renvoyées par l'API 
interface Utilisateur {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  phone: string;
}

const ListeUtilisateurs: React.FC = () => {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([]);
  const [afficherDetails, setAfficherDetails] = useState<number | null>(null);

  // avec fetch
  const recupererUtilisateurs = async () => {
    
      const reponse = await fetch("https://randomuser.me/api/?results=10");//lien api
      const dataRetour = await reponse.json();
      setUtilisateurs(dataRetour.results);
   
  };

  useEffect(() => {
    recupererUtilisateurs();
  }, []);

  
  const basculerDetails = (index: number) => {
    setAfficherDetails(afficherDetails === index ? null : index);
  };

  return (
    <Fragment>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "5px" }}>
      {utilisateurs.map((utilisateur, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ff8000",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <img
            src={utilisateur.picture.large}
            alt={`${utilisateur.name.first} ${utilisateur.name.last}`}
            
          />
          <h3>
            {utilisateur.name.title} {utilisateur.name.first} {utilisateur.name.last}
          </h3>
          <p>{utilisateur.email}</p>

         
          <button onClick={() => basculerDetails(index)}>
             {afficherDetails === index ? "-" : "+"}
          </button>

          
          {afficherDetails === index && (
            <div>
              <p>
                <strong>Adresse :</strong> {utilisateur.location.street.number}{" "}
                {utilisateur.location.street.name},  {utilisateur.location.city},{" "}
                {utilisateur.location.state}, {utilisateur.location.country}
              </p>
              <p>
                <strong>Téléphone :</strong> {utilisateur.phone}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
    </Fragment>
  );
};

export default ListeUtilisateurs;
