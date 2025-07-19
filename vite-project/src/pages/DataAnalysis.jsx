import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const DataAnalysis = () => {
  return (
    <div className='pt-16'>
      <Link
              to="/services/dataanalysisserivcedataanalysis"
              className="hover:bg-[#29A8AB] bg-gray-200 text-[#29A8AB] hover:text-white rounded-3xl hover:scale-105 shadow-md flex flex-col items-center justify-start gap-3 p-4 h-auto hover:opacity-100 opacity-70"
            >
              <div className="w-14 h-14 flex justify-center text-black bg-white rounded-full items-center">
                <MdOutlineScreenSearchDesktop className="w-7 h-7" />
              </div>
              <h1 className="text-3xl font-bold ">Data Analysis</h1>
              <div>
                <h3 className="text-2xl font-bold">
                  Enhance Your Customer Experience
                </h3>
              </div>
              <Link to="/services/dataanalysisserivcedataanalysis" className="underline text-lg font-bold">
                Learn More
              </Link>
            </Link>
    </div>
  )
}

export default DataAnalysis