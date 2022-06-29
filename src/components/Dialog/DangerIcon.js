import React from "react";

const DangerIcon = ({ children }) => {

    return (
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            {children}
        </div>
    )


}


export default DangerIcon