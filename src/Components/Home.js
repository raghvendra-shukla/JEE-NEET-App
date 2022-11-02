import React from 'react'
import JEE from './JEE'
import NEET from './NEET'

function Home() {
  {document.body.style.backgroundColor="#b7acac"};
  return (
    <>
    <div className="container relative">
      <h1 className='text-center my-2 text-3xl font-serif font-semibold'>Welcome to JEE NEET Online Library app</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.examturf.com/eqtkhtabd/wp-content/uploads/2021/02/IIT-JEE.jpg" className="d-block w-100 h-96" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-black">
        <h5 className='text-xl font-bold'>JEE Mains And Advance</h5>
        <p className='font-serif font-bold'>This app will help you to get the best books for the preparation JEE Mains And Advance</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/1566544519200-TERBJDS8FSFQGBGCC3B0/NEET.png" className="d-block w-100 h-96" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-black">
        <h5 className='text-xl font-bold'>NEET And Medical Enterence Exams</h5>
        <p className='font-serif font-bold'>This app will help you to get the best books for the preparation NEET and Other Medical Enterence Exams</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://helios-i.mashable.com/imagery/articles/06qvPfjkNRMAmTvVoPDDflf/hero-image.fill.size_1248x702.v1661351758.jpg" className="d-block w-100 h-96" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-black">
        <h5 className='text-xl font-bold'>Here You Get The Books You Need</h5>
        <p className='font-serif font-bold'>This App facilates you to get the books you need and is the books is not present in our app then you send us a feedback and we add that particular book as soon as possible.</p>
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
    </div>
    <div className="absolute bottom-0 w-100">
    <footer className=' text-center bg-black text-white'>
      copyright &copy 2022 JEE-NEETlibrary.com All rights || reserved
    </footer>
    </div>
    </>
  )
}

export default Home