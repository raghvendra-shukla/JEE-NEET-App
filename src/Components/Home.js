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
            <img src="https://scontent.fidr4-3.fna.fbcdn.net/v/t1.6435-9/36828569_1705741729475512_8935449309210476544_n.png?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=5j_0TS1NuVcQ7kNvgHNZc_E&_nc_ht=scontent.fidr4-3.fna&_nc_gid=Arg_N9N1FvnNQiHyNnFF8gk&oh=00_AYD6LqIECQJ14B-SB6DkUVf5Y61q-h6MYjP8PGAJFOXaew&oe=6710D668" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5 className="h4 font-poppins font-weight-bold">JEE Mains And Advanced</h5>
              <p className="font-poppins font-weight-bold">This app will help you get the best books for JEE Mains and Advanced preparation.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2020/12/1/medical-doctor-c.jpg" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-white">
              <h5 className="h4 font-poppins font-weight-bold">NEET And Medical Entrance Exams</h5>
              <p className="font-poppins font-weight-bold">This app will help you get the best books for NEET and other medical entrance exams preparation.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20191106/pngtree-back-to-school-rectangular-blackboard-education-book-pen-holder-image_321417.jpg" className="d-block w-100" style={{ height: "24rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5 className="h4 font-poppins font-weight-bold">Find The Books You Need</h5>
              <p className="font-poppins font-weight-bold">This app facilitates you in finding the books you need. If a book is not present in our app, you can send us feedback, and we will add it as soon as possible.</p>
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