import React from 'react';
import { useState } from "react";

function Feedback(props) {
    {document.body.style.backgroundColor="#b7acac"};
    const [feedback, setFeedback] = useState({name:"",standard:"",subjects:"",books:"",auther:"",query:""});
    const addfeedback= async(name,standard,subjects,books,auther,query)=>{
        //API call
        const response = await fetch("http://localhost:5000/api/feedback/addfeedback", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({name,standard,subjects,books,auther,query})
        });
        const prof= await response.json();
        // console.log(prof);
      }
    const handleonchange=(e)=>{ 
        setFeedback({...feedback,[e.target.name]:e.target.value})
    }
    const handleonclick=(e)=>{
        e.preventDefault();
        addfeedback(feedback.name,feedback.standard,feedback.subjects,feedback.books,feedback.auther,feedback.query)
        setFeedback({name:"",standard:"",subjects:"",books:"",auther:""})
        props.showAlert("feedback has been added successfully","success");
    }
  return (
    <div className='container'>
        <h1  className='text-center my-2 font-bold text-3xl'>feedback</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label font-bold">Name</label>
                <input type="text" className="form-control" onChange={handleonchange} id="name" name="name" aria-describedby="emailHelp" minLength={2} required value={feedback.name} placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="standard" className="form-label font-bold">Standard</label>
                <input type="text" className="form-control" id="description" onChange={handleonchange} name="standard" minLength={5} required value={feedback.standard}  placeholder="Enter your standard"/>
            </div>
            <div className="mb-3">
                <label htmlFor="subjects" className="form-label font-bold">Subjects</label>
                <input type="text" className="form-control" onChange={handleonchange} id="subjects" name="subjects" minLength={5} required value={feedback.subjects}  placeholder="Enter your subjects"/>
            </div>
            <div className="mb-3">
                <label htmlFor="books" className="form-label font-bold">Books</label>
                <input type="text" className="form-control" onChange={handleonchange} id="books" name="books" minLength={5} required value={feedback.books}
                 placeholder="Enter the books your want to add"/>
            </div>
            <div className="mb-3">
                <label htmlFor="auther" className="form-label font-bold">Auther</label>
                <input type="text" className="form-control" onChange={handleonchange} id="auther" name="auther" minLength={5} required value={feedback.auther}
                 placeholder="Enter the auther name"/>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Enter Your Queries" id="query"
                name="query" onChange={handleonchange} minLength={5} required value={feedback.query}style={{height: "5rem"}}></textarea>
                <label htmlFor="query" className='font-bold'>Queries</label>
            </div>
            <div className='text-center d-grid gap-2 col-6 mx-auto mb-3'>
            <button disabled={feedback.name.length<3|| feedback.standard.length<3|| feedback.subjects.length<3|| feedback.books.length<3|| feedback.auther.length<3 || feedback.query.length<3}type="submit" className="btn bg-black text-white mb-3" onClick={handleonclick}>Add feedback <i className="fa-solid fa-user-plus"></i></button>
            </div>
        </form>
    </div>
  )
}

export default Feedback