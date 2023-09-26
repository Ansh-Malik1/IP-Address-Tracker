import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import arrow from "../images/icon-arrow.svg"
import Display from "./Display";
import bg from "../images/pattern-bg-desktop.png"
export default function Form(){
    const {fetchData , formData , setFormData} = useContext(AppContext)
    function handleChange(e){
        setFormData(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetchData(formData)
    }
    return(
    <div className=" z-50 w-full flex flex-col items-center justify-start gap-7 relative h-[16rem] lg:h-60 ">
        <img src={bg} className="absolute -z-10 w-full h-full"></img>
        <h1 className=" text-4xl font-semibold mt-4 text-white">IP Tracker</h1>
        <form onSubmit={handleSubmit} className="w-full mt-2 flex items-center justify-center">
            <input
            type="text"
            placeholder="Enter any valid IP address"
            name="ip"
            value={formData}
            onChange={handleChange}
            className=" w-[80%] lg:w-[40%] py-3 px-6 rounded-xl"
            ></input>
            <button className=" bg-black py-4 ml-2 px-4 rounded-xl"><img src={arrow}></img></button>
        </form>
        <Display/>
    </div>
    )
}