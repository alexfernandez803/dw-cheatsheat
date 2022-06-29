import React, { useState } from "react";
import { CheveronDown, CheveronUp, StarFull } from "react-zondicons";
import cx from "classnames";
import FuncDesc from "./FuncDesc";

function CollapsibleInfo({ source, output, description, title = "", isGlobalOpen }) {
  const [isOpen, setIsOpen] = useState(isGlobalOpen);
  const [isFavorite, setIsFavorite] = useState(false);
  

  const toggleCollapse = (evt) => {
    evt.preventDefault();
    setIsOpen(!isOpen);
  };

  const onFavoriteClick = (evt) => {
    evt.preventDefault();
    setIsFavorite(!isFavorite)
    alert("Development in Progress.")
  }


  const toggleClass = [
    "w-full",
    "flex",
    "justify-between",
    "items-center",
    "py-1",
    "px-2",
    "bg-gray-100",
    "border-b",
  ];

  return (
    <div className={cx({ "border-gray-200": isOpen }, "px-1")}>
      <div className={cx(toggleClass, { '"border-gray-200': isOpen })}>
        <div className="px-2">
          <h1 className="text-indigo-600 text-bold cursor-pointer" onClick={toggleCollapse}>{title}</h1>
        </div>
        <div className="flex justify-end">

          <StarFull
            onClick={onFavoriteClick}
            className={cx(["cursor-pointer", "fill-current", "mr-2"],
              {
                "text-blue-300": !isFavorite,
                "text-yellow-500": isFavorite
              })} />
          {isOpen && <CheveronUp className="cursor-pointer" onClick={toggleCollapse} />}
          {!isOpen && <CheveronDown className="cursor-pointer " onClick={toggleCollapse} />}

        </div>
      </div>
      <div
        className={cx({
          "bg-indigo-200 border-indigo-300": isOpen,
          "bg-gray-400 border-gray-400": !isOpen,
        })}
      >
        <div className="w-full">
          <div className={cx({ hidden: !isOpen }, "h-full", "p-4", "overflow-auto")}>
            <FuncDesc source={source} description={description} output={output} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleInfo;
