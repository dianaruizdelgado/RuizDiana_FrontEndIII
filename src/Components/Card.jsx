import React from "react";

const Card = ({ input1, input2 }) => {
  return (
    <div className="card-container">
      <h3>Peliculas</h3>
      <p>Pelicula Favorita: {input1}</p>
      <p>Actor Favorito: {input2}</p>
    </div>
  );
};

export default Card;
