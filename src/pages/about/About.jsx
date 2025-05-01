// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>
//           We are dedicated to providing high quality online courses to help
//           individuals learn and grow in their desired fields. Our experienced
//           instruction ensure that each course is tailored for effective learning
//           and practical application.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Empowering learners worldwide with quality education</p>
      </header>

      <section className="offerings">
        <h2>📚 What We Offer</h2>
        <div className="offer-list">
          <div className="offer-item">🎓 Expert-Led Courses</div>
          <div className="offer-item">💡 Interactive Learning Modules</div>
          <div className="offer-item">🔍 Personalized Learning Paths</div>
          <div className="offer-item">📜 Certifications for Career Growth</div>
          <div className="offer-item">🌐 Global Community & Support</div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="community">
        <h2>🤝 Join Our Learning Community</h2>
        <p>
          Our platform isn't just about courses—it's about building a learning
          community where students, educators, and professionals connect, share,
          and grow together.
        </p>
      </section>

      {/* Call to Action */}
      <div className="cta">
        <h2>Ready to Start Your Learning Journey?</h2>
        <button className="cta-button">Explore Courses</button>
      </div>
    </div>
  );
};

export default About;
