import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="relative pt-1 footer">
  
    <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mt-16 border-t-2 border-gray-300">
            <div className="py-6 text-center sm:w-2/3">
                <p className="mb-2 text-sm font-bold">
                  This website is for educational purposes to ease up searching of Dataweave functions. No copyright infringement, the creator claims no responsibility on its use.
                  Dataweave is product by <Link className="text-blue-400" to="https://www.mulesoft.com/">Mulesoft</Link>
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer