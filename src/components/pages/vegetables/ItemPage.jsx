import React from 'react'
import "./vegetableForm.css";

const ItemPage = () => {
  return (
    <>
    <div className="container">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              {/* ... Card content for the first item ... */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              {/* ... Card content for the second item ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemPage