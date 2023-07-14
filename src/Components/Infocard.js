import React from 'react'

function Infocard(props) {
    const {id,
        name,
        email,
        phone,
        country,
        city,
        state,
        address,
        updateprofile,
        profile}=props
  return (
    <>
        <div className="card my-2" style={{width: "50rem"}}>
  <div className="card-body">
    <h5 className="card-title">Profile Section</h5>
  </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name : {name}</li>
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone : {phone}</li>
            <li className="list-group-item">Country : {country}</li>
            <li className="list-group-item">City : {city}</li>
            <li className="list-group-item">State : {state}</li>
            <li className="list-group-item">Address : {address}</li>
        </ul>
        <button className="btn btn-primary m-2" onClick={()=>{updateprofile(profile);props.showAlert("Updated successfully","success")}}>Update Profile <i className="fa-regular fa-pen-to-square"></i></button> 
        </div>
    </>
  )
}

export default Infocard