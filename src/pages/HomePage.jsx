import React, { useState } from "react";
import Header from "../components/Header/Headers";
import Footer from "../components/Footer/Footers";
import './HomePage.css'; 

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="home-scroll-container">
      

      <div className="banner-container">
        <h1 className="home-title">Welcome to Vivekanand College!</h1>
        <p className="line">Your journey to excellence starts here.</p>
        <div className="button-wrapper">
        <a href="/apply" className="my-button">Apply Now!</a>
        </div>
      </div>
        <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
     
      <div>  
        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li className="text"><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li className="text"><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li className="text"><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li className="text"><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li className="text"><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
        </ul>
        <div>
          <h2> Campus Life & Facilities</h2>
          <img src="/Images/students.jpeg" alt="Campus View 1" className="gallery-image" />
          <img src="/Images/campus-life.jpg" alt="Campus View 2"className="gallery-image taller-image"/>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        </div>
        <p className="home-subtext">Ready to start your journey with us?</p>
        <div className="button-wrapper"> 
        <a href="/courses" className="my-button" onClick={() => setShowForm(true)}>Explore Courses</a>
        </div>
        {/* Future: Admission Form Component */}
        {/* {showForm && <AdmissionForm />} */}
      </div>
    </div>
  );
};

export default HomePage;
