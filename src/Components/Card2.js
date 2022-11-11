import React from 'react'

function Card2(props) {
    const { Bookname, Subject, BookImg, Author, Class, Price, Buy, Pdf,id,showAlert,deletebook } = props;
  return (
    <>
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
          <button className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600" onClick={()=>{deletebook(id);showAlert("Deleted successfully","success")}}>Remove book</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card2