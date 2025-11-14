import React from "react";
import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";


function Livre({ livre }) {
  return (
    <div className="livre-card">
      <LivreImg src={livre.img} alt={livre.title} />
      <LivreTitle title={livre.title} />
      <LivrePrice price={livre.price} />
      <button className="read-more-btn">Read More</button>
    </div>
  );
}

export default Livre;
