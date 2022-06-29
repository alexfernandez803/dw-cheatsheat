import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ handleInputChange, searchText, onLogout, user }) => {
  const onLogoutClick = (evt) => {
    evt.preventDefault();
    if (onLogout) {
      onLogout();
    }
  };
  return (
    <div className="sticky top-0 flex flex-col justify-between w-56 h-screen px-2 bg-indigo-900">
      <div className="flex-grow h-screen">
        <h1 className="w-full mx-2 my-4 text-white text-l">
          Dataweave CS{" "}
          <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            Beta
          </span>
        </h1>
        <div className="flex flex-auto h-10 max-w-sm ">
          <span className="flex items-center px-1 bg-gray-100 rounded-l">
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </span>
          <input
            name="search"
            type="text"
            className="w-full min-w-0 pl-1 bg-gray-100 outline-none appearance-none"
            onChange={handleInputChange}
            value={searchText}
          />
        </div>
        <div className="px-2 py-4">
          <a href="https://www.buymeacoffee.com/hobbymungo" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "60px !important", width: "217px !important" }}
            />
          </a>
        </div>

        <div className="px-2 py-4">
          <a 
            className="flex rounded items-center justify-center w-full py-2 text-xs font-bold text-center text-white bg-indigo-600 hover:bg-indigo-700 shadow-light"
          href=" https://github.com/hobbymungo/dw-cheatsheet/issues" target="_blank" rel="noreferrer">
            <div>
            <p>  Submit Feature Request </p>
              <p>or Issue</p>
            </div>
          </a>
        </div>

       

      </div>
      <div className="py-4">
        <div className="py-3 text-white">Hello, {user && user.attributes.email}</div>
        <div className="px-2 py-2">
          <Link
            to="/profile"
            className="flex items-center justify-center w-full py-2 text-xs font-bold text-center text-white bg-indigo-600 rounded hover:bg-indigo-700 shadow-light"
          >
            Change Password
          </Link>
        </div>
        <div className="px-2">
          <Link
            to="/logout"
            className="flex items-center justify-center w-full py-2 text-xs font-bold text-center text-white bg-indigo-600 hover:bg-indigo-700 shadow-light"
            onClick={onLogoutClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
              className="mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
