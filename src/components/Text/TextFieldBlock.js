import React from "react";

const TextFieldBlock = ( {name, children} ) => {
  return (
    <label className="block">
    <span className="text-gray-700">{name}</span>
    {children}
  </label>
  )
}

export default TextFieldBlock