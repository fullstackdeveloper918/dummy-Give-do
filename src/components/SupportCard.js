import React from 'react'
import { useState } from 'react';
import { Button } from './Button';
import { TbUsers } from 'react-icons/tb';

export const SupportCard = (props) => {
    const [mouseIndex, setMouseIndex] = useState(null);
    const {index,img,para,paragraph,tax,head,donations} = props.item;

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
            className="relative rounded-2xl shadow-lg w-96 mb-10 pb-6 overflow-x-hidden hover:transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          >
            <div className="relative ">
  
              <img
                src={img}
                alt="allImg"
                width="490px"
                className="h-72 shadow-inner"
              />
              <div className="">
                <p className="absolute top-5 -left-3 text-sm pl-8 pr-4 py-1 rounded-lg bg-red-50 text-yellow-700 font-semibold ">
                  {tax}
                </p>
                <p className="pt-4 pb-1 text-xl px-4 font-bold text-black left-2">
                  {head}
                </p>
                <p className="px-4 py-2 text-md left-2 text-gray-500 ">
                  {paragraph}
                </p>
                <div className="flex gap-2 items-center font-semibold text-gray-400 pl-3">
                      {" "}
                      <TbUsers size={23} />{" "}
                      <p className="text-black">{donations}</p>
                    </div>
              </div>
            </div>
            <div className="flex gap-5 items-center px-5">
              {mouseIndex === index ? (
                <Button
                  text={"Pledge Monthly"}
                  className="bg-red-600 text-white w-[340px] mt-3 mb-1"
                />
              ) : (
                <>
                  <div className="flex flex-col py-3 gap-1">
                    <p className="text-lg font-semibold">
                      <span className="text-red-600 font-bold mr-2">$50,001</span>
                      {para}
                    </p>
                    
                  </div>
                </>
              )}
            </div>
          </div>
      </div>
    );
}


