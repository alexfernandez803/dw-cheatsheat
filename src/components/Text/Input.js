import React from "react";

const Input = ({ value, onChange, name, label, placeholder = "", type = "text", required = true, showError=false, ...props }) => {
  return (
    <div className="-space-y-px shadow-sm">
      <div>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        <input
         autoComplete="off"
          id={name}
          name={name}
          type={type}
          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      
    </div>
  );
};

export default Input;
