import React from 'react';
import { useEffect,useRef } from "react";
import { useState } from "react";
import Card2 from './Card2';
// import { useNavigate } from "react-router-dom";

// new name for this is Favourite
function BookCart(props) {
  {
    document.body.style.backgroundColor = "#b7acac";
  }
  const [books, setbooks] = useState([]);
  const { showAlert } = props;
  const getbooks= async () => {
    //API call
    const response = await fetch(
      "http://localhost:5000/api/cart/fetchbook",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    setbooks(json);
  };
  useEffect(() => {
      getbooks();
  },[]);
  
  //Delete a book
  const deletebook = async (id) => {
    //Deleting a book
    const response = await fetch(
      `http://localhost:5000/api/cart/deletebook/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(),
      }
    );
    const json = response.json();
    // console.log("deleting the book with id" + id);
    const newBook = books.filter((books) => {
      return books._id !== id;
    });
    setbooks(newBook);
  };
  return (
    <>
    <div className="row text-center my-2">
          <h2 className='text-center my-2 text-2xl font-semibold'>Your Favourite Books</h2>
          {books.map((element) => {
            return (
              <div className="col" key={element._id}>
                <Card2
                  Bookname={element.bookname}
                  Subject={element.subject}
                  BookImg={element.bookimg}
                  Author={element.author}
                  Class={element.standard}
                  Price={element.price}
                  Buy={element.buy}
                  id={element._id}
                  showAlert={showAlert}
                  deletebook={deletebook}
                />
              </div>
            );
          })}
        </div>
      </>
  );
}

export default BookCart