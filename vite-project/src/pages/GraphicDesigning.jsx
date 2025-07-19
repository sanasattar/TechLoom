import React from 'react'
import { Link } from 'react-router-dom'
import adobephotoshopremovebg from "../assets/adobephotoshopremovebg.png";

const GraphicDesigning = () => {
  return (
    <div className='pt-16'>
      <Link
              to="/service/services/servicegraphicdesigning"
              className="hover:bg-[#29A8AB] bg-gray-200 text-[#29A8AB] hover:text-white rounded-3xl hover:scale-105 shadow-md flex flex-col items-center justify-start gap-3 p-4 h-auto hover:opacity-100 opacity-70"
            >
              <div className="w-14 h-14 flex justify-center text-[#29A8AB] bg-white rounded-full items-center">
                <img src={adobephotoshopremovebg} alt="" />
              </div>
              <h1 className="text-3xl font-bold ">Graphic Designing</h1>
              <div className="leading-8">
                <h3 className="text-2xl font-bold leading-8">
                  Enhance Your Customer Experience
                </h3>
              </div>
              <Link
                to="/service/services/servicegraphicdesigning"
                className="underline leading-10 text-lg font-bold"
              >
                Learn More
              </Link>
            </Link>
    </div>
  )
}

export default GraphicDesigning