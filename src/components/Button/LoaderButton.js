import React from "react";
import {createUseStyles}  from 'react-jss'
import cx from "classnames";
const useStyles = createUseStyles({
  LoaderButton: {
    "& .spinning": {
      marginRight: '7px',
      top: '1px',
      animation: 'spin 1s infinite linear'
    }
  },
  "@keyframes spin": {
    from: { transform: 'scale(1) rotate(0deg)' },
    to: { transform: 'scale(1) rotate(360deg)' }
  }
})


const Refresh = ({className }) => {
  return (
    <svg className={`w-5 h-5 ${className}` } fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  )
}


export const LoaderButton = ({ isLoading = true, disabled = false, className = "", onSubmit, type = "submit", children, ...props }) => {
  const classes = useStyles()
  const handleSubmit = (evt) => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const defaultStyle =
    "relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md group  focus:outline-none focus:ring-2 focus:ring-offset- 2 focus:ring-indigo-500" 
 
  const cssRules = cx({
    className,
    [`${defaultStyle}`]: true,
    [`${classes.LoaderButton}`]: true,
    'disabled:opacity-50': disabled || isLoading,
    'hover:bg-indigo-700': !disabled,
    'bg-indigo-400': disabled || isLoading,
    'bg-indigo-600': !disabled,
  })

    return (
    <button disabled={disabled} className={cssRules} type={type} onClick={handleSubmit} { ...props}>
      {isLoading && <Refresh className="spinning" />}
      {children}
    </button>
  );
};

export default LoaderButton