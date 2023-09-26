import { useCallback, useContext, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { AppContext } from "./context/AppContext";
import { MapContainer , useMap , TileLayer , Popup  , Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import icon from "./icon";
import Loader from "./components/Loader";
import Display from "./components/Display";
function App() {
  const {lat , lng , loading} = useContext(AppContext)
  const{fetchData} = useContext(AppContext)
  const posi=[parseFloat(lat) , parseFloat(lng) ]
  console.log(lat)
  console.log(window.innerWidth)
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className=""> 
    {
      loading? (<Loader/>) : (<div>
        <Form/>
        {
          lat&& 
          <MapContainer  center={posi} zoom={23} scrollWheelZoom={true} zoomControl={false}className=" absolute -z-10 w-[100%] h-[35rem] md:h-[24rem] lg:h-[25.5rem] bottom-0 ">
           <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />      
            <Marker icon={icon} position={posi}>
              <Popup>
                Current Location
              </Popup>
            </Marker>
        </MapContainer>
        }
      
      
      </div>)
    }
    </div>
    

  );
}

export default App;
