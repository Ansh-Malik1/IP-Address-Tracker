import { createContext, useState } from "react";


export const AppContext = createContext()
export default function AppContextProvider({children}){
    const [ip , setIp] = useState('')
    const [isp , setIsp] = useState('')
    const [city , setCity] = useState('')
    const [timeZone , setTimeZone] = useState('')
    const [lat , setLat] = useState('')
    const [lng , setlng] = useState('')
    const [formData , setFormData] = useState({
        ip:""
    })
    const [loading , setLoading] = useState(true)
    const [flag , setFlag] = useState(0)
    async function fetchData(ip=0){
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_J5ckSRhxjeuBgc2ncUCyUXZrhG1em&ipAddress=${ip}`
        try{
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            setFlag(flag+1)
            setIp(data.ip)
            setIsp(data.isp)
            setCity(data.location.city)
            setTimeZone(data.location.timezone)
            setLat(data.location.lat)
            setlng(data.location.lng)
            if(ip==0){
                setFormData(data.ip)
            }
            setLoading(false)

        }
        catch(err){
            setIp('--')
            setIsp('--')
            setCity('--')
            setTimeZone('--')
            setLoading(false)
            setFormData('')
            console.log(err)
            alert("Incorrect IP Address , Try Again")
        }
    }

    const value={
        fetchData,
        formData,
        setFormData,
        ip,
        city,
        isp , 
        timeZone,
        lat,
        lng,
        loading
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}