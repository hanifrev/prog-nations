import React from "react";
export default function Bands({ name, origin, src, alt }) {
  return (
    <div className="BandClass">
      <br></br>
      <h2>{name.toUpperCase()}</h2>
      <h3>{origin}</h3>
      <img className="Pic" src={src} alt={alt} />;<br></br>
    </div>
  );
}
