import React from "react";
import { useState } from "react";

function Card(props) {
  const { Bookname, Subject, BookImg, Author, Class, Price, Buy, Pdf } = props;
  const [book, setbook] = useState({bookname:Bookname,subject:Subject,bookimg:BookImg,auther:Author,standard:Class,price:Price,buy:Buy});
    const addbook= async(bookname, subject, bookimg, author, standard, price, buy)=>{
        //API call
        const response = await fetch("http://localhost:5000/api/cart/addbook", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({bookname, subject, bookimg, author, standard, price, buy})
        });
        const book= await response.json();
        // console.log(book);
      }
  const handleonclick=(e)=>{
    e.preventDefault();
    setbook({bookname:Bookname,subject:Subject,bookimg:BookImg,auther:Author,standard:Class,price:Price,buy:Buy});
    addbook(book.bookname,book.subject,book.bookimg,book.auther,book.standard,book.price,book.buy);
  }
  return (
    <div className="container my-2 text-center flex
    justify-center">
      <div className="card bg-slate-200" style={{ width: "18rem" }}>
        <img src={BookImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-lg font-bold">{Bookname}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-slate-200">{Subject}</li>
            <li className="list-group-item bg-slate-200">{Author}</li>
            <li className="list-group-item bg-slate-200">{Class}</li>
            <li className="list-group-item bg-slate-200">{Price}</li>
          </ul>
          <a target="_blank" rel="noreferrer" href={Buy} className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600">Buy Now</a>
          <a target="_blank" rel="noreferrer" href={Pdf} className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600">Pdf</a>
          <button  className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600" onClick={handleonclick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
