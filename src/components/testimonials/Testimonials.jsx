import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonialData = [
    {
      name: "Alice",
      message: "I had zero coding experience when I joined, and now I’ve built my own portfolio site! The platform’s step-by-step guidance and practical projects helped me learn without feeling overwhelmed.",
      position: "Software Engineer",
    },
    {
      name: "Bob",
      message: "Amazing learning experience!",
      position: "Data Analyst",
    },
    {
      name: "Bob",
      message: "Amazing learning experience!",
      position: "Data Analyst",
    },
    {
      name: "Bob",
      message: "Amazing learning experience!",
      position: "Data Analyst",
    },
    {
      name: "Bob",
      message: "Amazing learning experience!",
      position: "Data Analyst",
    },
    
  ];

  return (
    <div className="testimonials">
      <h2>What Our Students Say</h2>
      <Slider {...settings}>
        {testimonialData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            {/* <img src={item.image} alt={item.name} className="student-image" /> */}
            <p className="message">{item.message}</p>
            <div className="info">
              <p className="name">{item.name}</p>
              <p className="position">{item.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
