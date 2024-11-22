import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TbUsers } from "react-icons/tb";
import image1 from "../images/tree.jpeg";
import image2 from "../images/girls.jpeg";
import image3 from "../images/children.jpeg";
import image4 from "../images/oldman.jpeg";
import image5 from "../images/oldwoman.webp";
import image6 from "../images/smallchild.jpeg";
import { Button } from "./Button";

const data = [
  {
    index: 0,
    img: image1,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "raised, ₹2L left",
    donations: "42 Donations",
  },
  {
    index: 1,
    img: image2,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "$40,001 raised, ₹2L left",
    donations: "42 Donations",
  },
  {
    index: 2,
    img: image3,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "$40,001 raised, ₹2L left",
    donations: "42 Donations",
  },
  {
    index: 3,
    img: image4,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "$40,001 raised, ₹2L left",
    donations: "42 Donations",
  },
  {
    index: 4,
    img: image5,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "$40,001 raised, ₹2L left",
    donations: "42 Donations",
  },
  {
    index: 5,
    img: image6,
    tax: "Tax Benefits Available",
    mission: "Mission",
    name: "Right To Clean Air",
    para: "$40,001 raised, ₹2L left",
    donations: "42 Donations",
  },
];

export const Cards = () => {
  const [mouseIndex, setMouseIndex] = useState(null);

  const handleMouseEnter = (id) => {
    setMouseIndex(id);
  };

  const handleMouseLeave = () => {
    setMouseIndex(null);
  };
  return (
    <div className="container mx-auto grid grid-cols-3 gap-5 px-40  mb-4">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl shadow-lg w-96 h-[370px] overflow-x-hidden hover:transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
        >
          <div className="relative ">
            <div className="absolute left-0 bottom-0 w-full rounded-3xl h-16 bg-gradient-to-b from-transparent via-[rgba(0,0,0,.59)] to-black"></div>

            <img
              src={item.img}
              alt="allImg"
              width="490px"
              className="h-72 rounded-3xl shadow-inner"
            />
            <div className="">
              <p className="absolute top-5 -left-3 text-sm pl-8 pr-4 py-1 rounded-lg bg-red-50 text-yellow-700 font-semibold ">
                {item.tax}
              </p>
              <p className="absolute bottom-10 italic text-md left-2 text-white ">
                {item.mission}
              </p>
              <p className="absolute bottom-1 pb-1 text-3xl font-bold text-white left-2">
                {item.name}
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
                <div style={{ width: 40, height: 40 }}>
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
                        fontSize: "26px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>

                <div className="flex flex-col py-3 gap-1">
                  <p className="text-lg font-semibold">
                    <span className="text-red-600 font-bold mr-2">$40,001</span>
                    {item.para}
                  </p>
                  <div className="flex gap-2 items-center font-semibold text-gray-400">
                    {" "}
                    <TbUsers size={23} />{" "}
                    <p className="text-black">{item.donations}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
