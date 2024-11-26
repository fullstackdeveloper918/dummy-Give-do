import React, { useState } from "react";
import Slider from "react-slick";
import "../App.css";
import { bigSlideData, CardData, slideData } from "../datas/Info";
import { Cards } from "./Cards";
import { SupportCard } from "./SupportCard";

function CustomSlide({ image, ...otherProps }) {
  return (
    <div
      {...otherProps}
      className={` rounded-xl ${
        otherProps.type === "second"
          ? "mx-10"
          : "w-full h-full relative flex justify-center items-center"
      }`}
    >
      <img
        src={image}
        alt="slider"
        className={`${
          otherProps.type === "second"
            ? "w-28 h-20"
            : "w-full h-full object-cover rounded-lg px-4 "
        }`}
      />
    </div>
  );
}

function CustomSlides(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.type === "first" ? 1 : props.type === "second" ? 3 : 1,
    slidesToScroll: props.type === "first" ? 1 : props.type === "second" ? 3 : 3,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "18%",
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        className={`transition-all duration-300 ${
          activeSlide === i ? "bg-red-400" : "bg-gray-400"
        } ${props.type === "first" ? "w-3 h-3 rounded-full" : "w-6 h-1 my-8"} `}
      ></div>
    ),
  };

  return (
    <div>
      {props.type === "first" ? (
        <div className="slider-container mx-auto px-4 max-w-full">
          <Slider {...settings}>
            {bigSlideData.map((data, index) => (
              <div key={index} className="relative">
                <CustomSlide image={data.img} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        props.type === "second" ?
        <div>
          <div className="slider-container mx-auto max-w-full my-8">
            <Slider {...settings}>
              {slideData.map((data, index) => (
                <div key={index} className="">
                  <div className="border shadow-lg bg-gray-50 rounded-xl mx-10 py-8">
                    <CustomSlide image={data.img} type={props.type} />
                    <p className="text-center">{data.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        :
        <div className="slider-container mx-auto max-w-full my-8">
            <Slider {...settings}>
                 <div className="">
                    <div className="">
                    {
                        slideData.filter((item,index)=> index > 6).map((item,index)=>(
                          <div className="">
                            <Cards item={item} type="news" />
                          </div>
                        ))
                      }
                    </div>
                      <div className="">
                      {
                        CardData.filter((item,index)=> index < 3).map((item,index)=>(
                          <div key={index} className="">
                            <SupportCard item={item}/>
                          </div>
                        ))
                      }
                      </div>
                 </div>

                 <div className="flex">
                        <div className="">
                        {
                            slideData.filter((item,index)=> index < 2).map((item,index)=>(
                            <div className=""> 
                              <Cards item={item} type="news" />
                            </div>
                            ))
                          }
                        
                        </div>
                          <div>
                          {
                            CardData.filter((item,index)=> index > 2).map((item,index)=>(
                              <div key={index} className="">
                                <SupportCard item={item}/>
                              </div>
                            ))
                          }
                          </div>
                 </div>
            </Slider>
        </div>
      )}
    </div>
  );
}

export default CustomSlides;
