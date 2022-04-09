import React from "react";

type Prop = {}

const Banner = (prop: Prop) => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./src/img/dosiin-banner_green54648.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./src/img/dosiin-banner_green54648.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./src/img/goldie-final-banner-min.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  )
}
export default Banner