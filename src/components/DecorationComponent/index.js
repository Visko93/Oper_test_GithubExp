import React from "react";

import "./style.css";
import land from "../../assets/png/land.jpg";

function Decoration(props) {
  return (
    <div className="decoration">
      <img src={land} alt="Imagem decorativa da pagina inicial" />
    </div>
  );
}

export default Decoration;
