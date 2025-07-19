import React from 'react'
import { Link } from 'react-router-dom'
import webscraping from "../assets/webscraping.png";


const WebScraping = () => {
  return (
    <div className='pt-[5rem]'>
         <Link
              to="/service/webscraping/serivcewebscraping"
              className="hover:bg-[#29A8AB] bg-gray-200 text-[#29A8AB] hover:text-white rounded-3xl hover:scale-105 shadow-md flex flex-col items-center justify-start gap-3 p-4 h-auto hover:opacity-100 opacity-70"
            >
              <div className="w-14 h-14 flex justify-center bg-white rounded-full items-center leading-10 ">
                <img width={30} src={webscraping} alt="" />
              </div>
              <h1 className="text-3xl font-bold leading-10 ">Web Scraping</h1>
              <div className="leading-8">
                <h3 className="text-2xl font-bold leading-8">
                  Enhance Your Customer Experience
                </h3>
              </div>
              <a
                href="/service/webscraping/serivcewebscraping"
                className="underline leading-10 text-lg font-bold"
              >
                Learn More
              </a>
            </Link>

    </div>
  )
}

export default WebScraping