import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { Bookname, Subject, BookImg, Author, Class, Price, Buy, Pdf } = props;
  return (
    <div className="container my-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={BookImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-lg font-bold">{Bookname}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{Subject}</li>
            <li className="list-group-item">{Author}</li>
            <li className="list-group-item">{Class}</li>
            <li className="list-group-item">{Price}</li>
          </ul>
          <a target="_blank" rel="noreferrer" href={Buy} className="btn btn-primary my-2 mx-2 hover:bg-green-600 active:bg-green-600">Buy Now</a>
          <a target="_blank" rel="noreferrer" href={Pdf} className="btn btn-primary my-2 mx-2 hover:bg-green-600 active:bg-green-600">Pdf</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
