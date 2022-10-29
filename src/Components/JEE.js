import React, { useEffect, useState } from 'react'
import Card from './Card'

function JEE() {
  {document.body.style.backgroundColor="#b7acac"};
  const [Data, setData] = useState([]);
  const jeedata=async()=>{
    let url=`https://jee-neet-api.herokuapp.com/api/jee`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setData(parsedData);
  }
  useEffect(() => {
    jeedata();
  }, [])
  
  return (
    <div className="row text-center my-2">
      {Data.map((element)=>(
        <div className="col" key={element.Buy}>
          <Card Bookname={element.Bookname} Subject={element.Subject} BookImg={element.BookImg} Author={element.Author} Class={element.Class} Price={element.price} Buy={element.Buy} Pdf={element.Pdf}/>
        </div>
      ))}
    </div>
  )
}

export default JEE