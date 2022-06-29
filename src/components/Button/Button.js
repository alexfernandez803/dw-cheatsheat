import React from "react";

export const Button = ({ disabled = false, className = "", onSubmit, type = "submit", children }) => {
  const handleSubmit = (evt) => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const style =
    "relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset- 2 focus:ring-indigo-500";
  return (
    <button disabled={disabled} className={`${style} ${className}`} type={type} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button