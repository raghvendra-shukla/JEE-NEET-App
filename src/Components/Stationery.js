import React, { useEffect, useState } from 'react'
import Card3 from './Card3';
import Spinner from "./Spinner";


function Stationery() {
    {
        document.body.style.backgroundColor = "#b7acac";
    }
    const [data, setdata] = useState([]);
    const [city, setcity] = useState("sagar");
    const [loading, setloading] = useState(false);
    const StationeryData=async()=>{
        let url=`https://jee-neet-stationaryapi.onrender.com/api/stationery/${city}`;
        setloading(true);
        let Data=await fetch(url);
        let persedData=await Data.json();
        setdata(persedData);
        setloading(false);
    }
    useEffect(() => {
        StationeryData();
    },[city])
    
    const handleonchange=(e)=>{
        setcity(e.target.value);
        // console.log(city);
      }
    
  return (
    <>
        {/* <div className="container flex text-center justify-center"> */}
        <div className="container flex my-2">
            <select className="form-select me-2 bg-slate-100 browser-default custom-select" onChange={handleonchange}>
                {/* <option selected value="sagar">sagar</option> */}
                <option value="sagar">Sagar</option>
                <option value="bhopal">Bhopal</option>
                <option value="indore">Indore</option>
                <option value="jabalpur">Jabalpur</option>
            </select>
        </div>
        <div className="flex text-center mx-auto">
        <div className="flex-col text-center mx-auto">
            <div className="container text-center">
                {loading && <Spinner/> }
                </div>
                    {data.map((element)=>(
                        <div className="row" key={element.Stationerynumber}>
                            <Card3 Stationeryname={element.Stationeryname} Stationeryaddress={element.Stationeryaddress} Stationerynumber={element.Stationerynumber}/>
                        </div>
                    ))}
                </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default Stationery