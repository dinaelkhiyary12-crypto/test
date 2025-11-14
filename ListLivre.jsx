import React from "react";
import Livre from "./Livre";


function ListLivre({ livres }) {
  return (
    <div className="livre-list">
      {livres.map((livre, index) => (
        <Livre key={index} livre={livre} />
      ))}
    </div>
  );
}

export default ListLivre;
