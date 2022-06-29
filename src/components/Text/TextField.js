import React from "react";

const TextField = ({ className, value, onChange, placeholder = "", id }) => {
  return (
    <>
      <input 
        id={id}
        className={className}
        placeholder={placeholder} onChange={onChange}
        value={value}
        />
    </>
  );
};

export default TextField;
