import React from 'react'
import cx from 'classnames'
import { CheckmarkOutline } from 'react-zondicons'
const Plan = ({ name, isActive, price, mode = 'monthly', onSelected, description = "" }) => {
    const activeClass = cx({ "bg-blue-500": isActive, "text-white": isActive, "text-blue-500": !isActive })
    const activeClassText = cx({
        "text-blue-500": !isActive,
        "text-white": isActive,
    })

    const values = () => {
        return String(price).split(".")
    }

    const onSelectPlanClick = (evt) => {
        evt.preventDefault();
        onSelected(name)
    }

    return (
        <div className={cx(['p-2', 'md:w-1/2', 'w-1/4'])} onClick={onSelectPlanClick}>

            <label className="flex flex-col rounded-lg shadow border group relative cursor-pointer hover:shadow-2xl">
                <div className={cx('w-full', 'px-2', 'py-3', 'rounded-t-lg', activeClass)}>

                    {isActive && <CheckmarkOutline className="fill-current text-green-200" />}

                    <p className={cx(["text-5xl font-bold text-center"]) + " " + activeClassText} >
                        $ {values()[0]}.<span className="text-3xl">{values()[1]}</span>
                    </p>
                    <p className={'text-xs text-center uppercase ' + activeClassText}>{mode}</p>
                </div>
                <div
                    className={cx(['flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg'],
                        { "bg-blue-500": isActive })}

                >

                    <p className={"px-2 text-xs " + activeClassText}>
                        {description}
              </p>

                </div>
            </label>
        </div>
    )

}

export default Plan