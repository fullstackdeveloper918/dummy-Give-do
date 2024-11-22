import React from 'react'
import { useState } from 'react';
import { Button } from './Button';
import { CircularProgressbar } from 'react-circular-progressbar';
import { TbUsers } from 'react-icons/tb';

export const Cards = (props) => {
    const [mouseIndex, setMouseIndex] = useState(null);
    const {index,img,name,para,tax,mission,donations} = props.item;

    const handleMouseEnter = (id) => {
      setMouseIndex(id);
      // console.log(item);
      
    };
  
    const handleMouseLeave = () => {
      setMouseIndex(null);
    };
    return (
      <div >
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl shadow-lg w-96 h-[370px] overflow-x-hidden hover:transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          >
            <div className="relative ">
              <div className="absolute left-0 bottom-0 w-full rounded-3xl h-16 bg-gradient-to-b from-transparent via-[rgba(0,0,0,.59)] to-black"></div>
  
              <img
                src={img}
                alt="allImg"
                width="490px"
                className="h-72 rounded-3xl shadow-inner"
              />
              <div className="">
                <p className="absolute top-5 -left-3 text-sm pl-8 pr-4 py-1 rounded-lg bg-red-50 text-yellow-700 font-semibold ">
                  {tax}
                </p>
                <p className="absolute bottom-10 italic text-md left-2 text-white ">
                  {mission}
                </p>
                <p className="absolute bottom-1 pb-1 text-3xl font-bold text-white left-2">
                  {name}
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center px-5">
              {mouseIndex === index ? (
                <Button
                  text={"Pledge Monthly"}
                  className="bg-red-600 text-white w-[340px] mt-4"
                />
              ) : (
                <>
                  <div style={{ width: 40, height: 40 }} className='text-center'>
                    <CircularProgressbar
                      value={46}
                      // text={`${46}%`}
                      styles={{
                        path: {
                          stroke: "#FEBE10",
                          strokeWidth: 10,
                        },
                        trail: {
                          stroke: "#d6d6d6",
                          strokeWidth: 10,
                        },
                        text: {
                          fill: "#000000",
                          fontSize: "36px",
                          
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </div>
  
                  <div className="flex flex-col py-3 gap-1">
                    <p className="text-lg font-semibold">
                      <span className="text-red-600 font-bold mr-2">$50,001</span>
                      {para}
                    </p>
                    <div className="flex gap-2 items-center font-semibold text-gray-400">
                      {" "}
                      <TbUsers size={23} />{" "}
                      <p className="text-black">{donations}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
      </div>
    );
}


