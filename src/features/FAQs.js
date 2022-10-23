import React from "react";
import data from "../asset/FAQ_data";
import FAQ from "../component/FAQ";

function FAQs() {
  return (
    <div className="main">
      <div className="faq-head">
        <h1>Shadow FAQ</h1>
        <p>Demo Frequently Asked Qustion</p>
      </div>

      <div className="faq-container">
        {data.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQs;
