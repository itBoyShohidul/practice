import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

function AuthChanger() {
  const auth = useAuth();
  const [authValue, setAuthValue] = useState(auth);

  const authChange = () => {
    if (authValue === true) {
      setAuthValue(false);
    } else {
      setAuthValue(true);
    }
  };

  return (
    <div>
      AuthChanger
      <div>
        <button onClick={() => authChange()}>
          Change {authValue === true ? "true" : "False"}
        </button>
      </div>
    </div>
  );
}

export default AuthChanger;
