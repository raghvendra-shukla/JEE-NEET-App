import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner';

function NEET() {
  {document.body.style.backgroundColor="#b7acac"};
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");
  const neetdata=async()=>{
    let url=`https://jee-neet-api.herokuapp.com/api/neet`;
    setloading(true);
    let data=await fetch(url);
    let parsedData=await data.json();
    setData(parsedData);
    setloading(false);
  }
  useEffect(() => {
    neetdata();
  }, []);

  const handleonchange=(e)=>{
    localStorage.setItem("search",e.target.value);
    setsearch("");
  }
  
  const handleonckick=(e)=>{
    e.preventDefault();
    const val=localStorage.getItem("search");
    setsearch(val);
  }

  return (
    <>
    <form className="container flex my-2" role="search">
          <input
            className="form-control me-2 bg-slate-100"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleonchange}
            name="search"
          />
          <button className="btn bg-black text-white" type="submit" onClick={handleonckick}>
            Search
          </button>
        </form>
    <div className="flex justify-center">
    <div className="text-center justify-center">
        {loading && <Spinner/>}
      </div>
    <div className="row text-center my-2">
      {Data.filter((element)=>{
            if(search==""){
              return element;
            }
            else if(JSON.stringify(element).toLowerCase().includes(search.toLowerCase())){
              return element;
            }
          }).map((element)=>(
        <div className="col" key={element.Buy}>
          <Card Bookname={element.Bookname} Subject={element.Subject} BookImg={element.BookImg} Author={element.Author} Class={element.Class} Price={element.price} Buy={element.Buy} Pdf={element.Pdf}/>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default NEET