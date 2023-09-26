import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export default function Display(){
    const {ip ,city , isp , timeZone} = useContext(AppContext)
    return(
        <div className=" absolute h-[20rem] md:h-[15rem]   bg-white w-[80%] px-5 py-5 lg:gap-5 lg:grid flex flex-col md:grid md:grid-cols-2 z-50 lg:grid-cols-4 -bottom-56 md:-bottom-36 lg:-bottom-16 rounded-lg lg:h-32">
            <div className="flex flex-col justify-evenly items-center w-full relative gap-2 h-full">
                  <h3 className=" text-slate-600">IP Address</h3>
                  <h1 className=" text-slate-900 font-bold text-xl">{ip}</h1>
                <div className=" lg:h-20 lg:w-[2px] bg-gray-400 lg:absolute bottom-0  w-[50%] h-[2px] lg:right-0"></div>
            </div>
            <div  className="flex flex-col justify-evenly items-center w-full relative gap-2 h-full">
                  <h3 className=" text-slate-600">Location</h3>
                  <h1  className=" text-slate-900 font-bold text-xl">{city}</h1>
                  <div className=" lg:h-20 lg:w-[2px] bg-gray-400 lg:absolute bottom-0  w-[50%] h-[2px] lg:right-0"></div>
            </div>
            <div  className="flex flex-col justify-evenly items-center w-full relative gap-2 h-full">
                  <h3 className=" text-slate-600">Time Zone</h3>
                  <h1  className=" text-slate-900 font-bold text-xl">{timeZone}</h1>
                  <div className=" lg:h-20 lg:w-[2px] bg-gray-400 lg:absolute bottom-0  w-[50%] h-[2px] lg:right-0"></div>
            </div>
            <div className="flex flex-col justify-evenly items-center w-full relative gap-2 h-full">
                  <h3 className=" text-slate-600">ISP</h3>
                  <h1  className=" flex flex-wrap ml-2 text-center text-slate-900 font-bold text-xl">{isp}</h1>
                  <div className=" lg:hidden lg:h-20 lg:w-[2px] bg-gray-400 lg:absolute bottom-0  w-[50%] h-[2px] lg:right-0"></div>
            </div>
        </div>
    )
}