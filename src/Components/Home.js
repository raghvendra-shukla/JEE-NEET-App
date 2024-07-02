import React from 'react'
import JEE from './JEE'
import NEET from './NEET'

function Home() {
  {document.body.style.backgroundColor="#b7acac"};
  return (
    <>
     <div className="container text-center">
      <h1 className="text-center my-2 display-3 font-poppins font-weight-bold" style={{ borderBottom: "0.2rem solid #003262", display: "inline-block", paddingBottom: "0.2rem" }}>
        Welcome to JEE NEET Online Library App
      </h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.examturf.com/eqtkhtabd/wp-content/uploads/2021/02/IIT-JEE.jpg" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5 className="h4 font-weight-bold">JEE Mains And Advanced</h5>
              <p className="font-serif font-weight-bold">This app will help you get the best books for JEE Mains and Advanced preparation.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/1566544519200-TERBJDS8FSFQGBGCC3B0/NEET.png" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5 className="h4 font-weight-bold">NEET And Medical Entrance Exams</h5>
              <p className="font-serif font-weight-bold">This app will help you get the best books for NEET and other medical entrance exams preparation.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://helios-i.mashable.com/imagery/articles/06qvPfjkNRMAmTvVoPDDflf/hero-image.fill.size_1248x702.v1661351758.jpg" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5 className="h4 font-weight-bold">Find The Books You Need</h5>
              <p className="font-serif font-weight-bold">This app facilitates you in finding the books you need. If a book is not present in our app, you can send us feedback, and we will add it as soon as possible.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer className="text-center py-3 mt-4 border-top" style={{ borderColor: "#003262" }}>
        <p className="m-0" style={{ fontSize: "0.875rem", color: "#003262" }}>© 2024 JEE NEET Books. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home