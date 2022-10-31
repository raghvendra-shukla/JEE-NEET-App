import React from 'react';
import loading from "./loading.gif";

function Spinner() {
  return (
    <div className="container text-center my-2">
        <img src={loading} alt="loading" />
      </div>
  )
}

export default Spinner