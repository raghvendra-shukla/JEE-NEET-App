import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  document.body.style.backgroundColor = "#b7acac";
  
  return (
    <div className="container mt-5" style={{ fontFamily: "'Poppins', sans-serif", color: "#003262" }}>
      <h1 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>About JEE NEET Books</h1>
      <p style={{ fontSize: "1.125rem" }}>
        JEE NEET Books is a comprehensive full-stack application built using the MERN stack. It aims to support students preparing for competitive exams like JEE and NEET by offering a curated selection of the best books available.
      </p>
      <p style={{ fontSize: "1.125rem" }}>
        The application starts with a user-friendly login/signup page to grant access to the platform. A custom API has been developed to manage the book listings, which include details like prices, images, and purchase links to popular e-commerce sites like Flipkart and Amazon. Additionally, there is an API providing information on available stationery items within the user's locality.
      </p>
      <p style={{ fontSize: "1.125rem" }}>
        For security and user authentication, JWT (JSON Web Token) is implemented. The application features several sections, including a home page, JEE section, NEET section, feedback section, user dashboard, and an about page.
      </p>
      <p style={{ fontSize: "1.125rem" }}>
        In the user dashboard, Multer is used for handling profile image uploads, allowing users to personalize their profiles. The dashboard also displays user details and other relevant information. The feedback section provides a platform for users to share their experiences and report any issues with the books or the application.
      </p>
      <p style={{ fontSize: "1.125rem" }}>
        A secure logout functionality is also available, ensuring that users can safely exit the application.
      </p>
      <p style={{ fontSize: "1.125rem" }}>
        Overall, JEE NEET Books aims to simplify the process of finding and accessing the best resources for JEE and NEET preparation, offering a seamless and user-friendly experience with features like authentication, personalized dashboards, and an interactive feedback system.
      </p>
    </div>
  );
}

export default About;


