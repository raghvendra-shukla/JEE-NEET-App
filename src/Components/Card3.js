import React from "react";

function Card3(props) {
  const { Stationeryname, Stationerynumber, Stationeryaddress } = props;
  {
    document.body.style.backgroundColor = "#b7acac";
  }
  return (
    <>
      <div
        className="container my-2 mx-2 text-center flex
    justify-center"
      >
        <div
          className="card text-center bg-slate-200"
          style={{ width: "50rem" }}
        >
          <div className="card-header"><i className="fa-solid fa-shop"></i> {Stationeryname}</div>
          <div className="card-body">
            <h5 className="card-title"><i className="fa-solid fa-map-location-dot"></i> {Stationeryaddress}</h5>
          </div>
          <div className="card-footer text-body-secondary"><i className="fa-solid fa-square-phone"></i> {Stationerynumber}
        </div>
        </div>
      </div>
    </>
  );
}

export default Card3;
