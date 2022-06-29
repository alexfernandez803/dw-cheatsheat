import React, {useState} from "react";
import Dialog from "../../components/Dialog/Dialog";
import PlanDialog from "../../components/Dialog/PlanDialog";
import DangerIcon from "../../components/Dialog/DangerIcon";
import DangerSvg from "../../components/Dialog/DangerSvg";

const Subscribe = ({ showDialog }) => {

    const [showDialog, setShowDialog] = useState(false);

    const onSubscribeButtonClick = (evt) => {
        evt.preventDefault();
        setShowDialog(!showDialog)
    }
    return (
        <>
            {showDialog && <Dialog >
                <PlanDialog onCancel={onSubscribeButtonClick} icon={<DangerIcon><DangerSvg /></DangerIcon>} />
            </Dialog>}
            <div className="flex my-2 px-2 justify-between">
                <div className="left-main-head">

                </div>
                <div className="right-main-head ">
                    <button onClick={onSubscribeButtonClick} type="submit" className="group relative w-60 flex   justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-red-800 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </span>
          Subscribe
        </button>
                </div>
            </div>
        </>
    )
}

export default Subscribe