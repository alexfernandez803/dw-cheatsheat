import React from "react";
import cx from "classnames";
const Alert = ({ type = "success", children, onHandleClose, ...props }) => {

  const handleCloseClick = (evt) => {
    evt.preventDefault()
    if (onHandleClose) {
      onHandleClose()
    }
  }
  const classes = cx({
    'flex items-center justify-center px-2 py-1 m-1 font-medium': true,
    'text-green-700 bg-green-100 border border-green-300': type === 'success',
    'text-red-700 bg-red-100 border border-red-300': type === 'error'
    
  })
  return (
    <div
      {...props}
      className={classes}
    >
      <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 mx-2 feather feather-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="flex-initial max-w-full text-xl font-normal"> {children} </div>
      <div className="flex flex-row-reverse flex-auto">
        <div >
          <svg
            onClick={handleCloseClick}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 ml-2 rounded-full cursor-pointer feather feather-x hover:text-green-400"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Alert;
