import React from "react";

import SearchComponent from "../../components/SearhComponent";
import Decoration from "../../components/DecorationComponent";

import "./style.css";

function LandPage(props) {
  return (
    <>
      <div className="landpage">
        <Decoration />
        <SearchComponent />
      </div>
    </>
  );
}

export default LandPage;
