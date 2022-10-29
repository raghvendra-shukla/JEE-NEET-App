import React, { useEffect, useState } from 'react'
import Card from './Card'

function NEET() {
  {document.body.style.backgroundColor="#b7acac"};
  const [Data, setData] = useState([]);
  const neetdata=async()=>{
    let url=`https://jee-neet-api.herokuapp.com/api/neet`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setData(parsedData);
  }
  useEffect(() => {
    neetdata();
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

export default NEET