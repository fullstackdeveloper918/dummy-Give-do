import React, { useState } from "react";
import Slider from "react-slick";
import '../App.css';
import image1 from '../images/1st.webp';
import image2 from '../images/2nd.webp';
import image3 from '../images/3rd.webp';
import image4 from '../images/4th.webp';
import image5 from '../images/5th.webp';
import image6 from '../images/6th.webp';

function CustomSlide({ image, ...otherProps }) {
  return (
    <div {...otherProps} className="relative flex justify-center items-center rounded-xl">
      <img src={image} alt="slider" className="w-full h-full object-cover rounded-lg px-4" />
    </div>
  );
}

function CustomSlides() {

  const [activeSlide,setActiveSlide] = useState(0);

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    centerMode: true, 
    focusOnSelect: true, 
    centerPadding: '18%', 
    beforeChange: (current, next) => setActiveSlide(next), 
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeSlide === i ? "bg-red-400" : "bg-gray-400"
        }`}
      ></div>
    ),
    
  };

  return (
    <div className="slider-container mx-auto px-4 max-w-full">
      <Slider {...settings}>
        <div className="relative">
          <CustomSlide image={image1} />
        </div>
        <div className="relative">
          <CustomSlide image={image2} />
        </div>
        <div className="relative">
          <CustomSlide image={image3} />
        </div>
        <div className="relative">
          <CustomSlide image={image4} />
        </div>
        <div className="relative">
          <CustomSlide image={image5} />
        </div>
        <div className="relative">
          <CustomSlide image={image6} />
        </div>
      </Slider>
    </div>
  );
}

export default CustomSlides;
