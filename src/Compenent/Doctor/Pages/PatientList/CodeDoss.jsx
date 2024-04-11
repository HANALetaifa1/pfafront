import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import "./codemedd.css"



function CodeDoss() {
  const [showCode, setShowCode] = useState(false);
  const code = generateCode();

  const handleToggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <>
    <div className="codemed">
      <h1>Code généré :</h1>
      <input
        type={showCode ? "text" : "password"}
        value={code}
        readOnly
      />
      <RemoveRedEyeIcon onClick={handleToggleCode}/>
        {/* {showCode ? "Masquer le code" : "Afficher le code"} */}
     
    </div>
    </>
  );
}

export default CodeDoss;
