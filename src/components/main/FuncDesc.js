import React from "react";
import Code from "./Code";
function FuncDesc({ description, source = ``, output = ``, isOpen }) {
  return (
    <div className="w-full">
      <p className="text-sm">{description}</p>
      {isOpen && <Code source={source} output={output} />}
    </div>
  );
}

export default FuncDesc;
