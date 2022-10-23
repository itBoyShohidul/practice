import React from "react";
import { useState } from "react";

function FAQ({ id, title, description }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article key={id}>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {title}
      </button>
      {toggle && <p className="para">{description}</p>}
    </article>
  );
}

export default FAQ;
