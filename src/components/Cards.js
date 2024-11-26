import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { CircularProgressbar } from "react-circular-progressbar";
import { TbUsers } from "react-icons/tb";

export const Cards = (props) => {
  const [mouseIndex, setMouseIndex] = useState(null);
  const { index, img, name, para, tax, mission, donations, head, paragraph } =
    props.item;

  const handleMouseEnter = (id) => {
    setMouseIndex(id);
    // console.log(item);
  };

  const handleMouseLeave = () => {
    setMouseIndex(null);
  };
  return (
    <div>
      <div
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl shadow-lg  ${
          props.type === "monthly" ? "h-[380px] w-96" : props.type === "support" ? "h-[520px] w-96" : "w-96 mx-3 h-[480px]"
        } overflow-x-hidden hover:transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-white`}
      >
        <div className="relative ">
          {props.type === "monthly" && (
            <div className="absolute left-0 bottom-0 w-full rounded-3xl h-16 bg-gradient-to-b from-transparent via-[rgba(0,0,0,.59)] to-black"></div>
          )}

          <img
            src={img}
            alt="allImg"
            width="490px"
            className={`h-72 shadow-inner ${
              props.type === "monthly" && "rounded-3xl"
            } `}
          />
          {
            (props.type === "monthly" || props.type === "support") && 
            <p className="absolute top-5 -left-3 text-sm pl-8 pr-4 py-1 rounded-lg bg-red-50 text-yellow-700 font-semibold ">
            {tax}
          </p> 
          }                               
          <div className="">
            {props.type === "monthly" ? (
              <>
                <p className="absolute bottom-10 italic text-md left-2 text-white ">
                  {mission}
                </p>
                <p className="absolute bottom-1 pb-1 text-3xl font-bold text-white left-2">
                  {name}
                </p>
              </>
            ) : (
              props.type === "support" ?
              <>
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
              </> :
              <>
              
              </>
            )}
          </div>
        </div>
        <div className="flex gap-5 items-center px-5">
          {props.type === "news" ? <></>
          :
          mouseIndex === index ? (
            <Button
              text={`${
                props.type === "monthly" ? "Pledge Monthly" : "Donate Now"
              }`}
              className="bg-red-500 hover:bg-red-300 text-white w-[340px] mt-4 "
            />
          ) : (
            <>
              <div className="mt-3">
                {props.type === "monthly" ? (
                  <div className="flex gap-6 items-center ">
                    <div
                      style={{ width: 40, height: 40 }}
                      className="text-center"
                    >
                      <CircularProgressbar
                        value={46}
                        text={`${46}%`}
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
                            fontSize: "30px",
                            textAnchor: "middle",
                            dominantBaseline: "middle",
                            fontWeight: "bold",
                          },
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-lg">{para}</p>
                      <div className="flex gap-2 items-center font-semibold text-gray-400">
                        {" "}
                        <TbUsers size={23} />{" "}
                        <p className="text-black">{donations}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  props.type === 'support' ?
                  <div className="w-20 h-2">
                    {/* <progress value={0.5} /> */}
                    <progress
                      value={70}
                      max="100"
                      style={{
                        width: "330px",
                        height: "7px",
                      }}
                    />
                    <div className="flex justify-between w-80">
                      <span className={`text-red-600 font-bold text-xl `}>
                        $50,001
                      </span>
                      <span className="text-gray-400">
                        Raised of 60,00,000 goal
                      </span>
                    </div>
                  </div> 
                  :
                  <div>
                    
                  </div>
                )}
              </div>

              
            </>
          )}
        </div>
      </div>
    </div>
  );
};
