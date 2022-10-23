import React, { useContext } from "react";
import { countContext } from "../contexts/countContext";

function Bahok2() {
  const context = useContext(countContext);
  return (
    <div>
      Bahok2
      <h1>{context}</h1>
    </div>
  );
}

export default Bahok2;
