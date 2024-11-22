import React, { useState } from "react";
import logo from "../images/logo.png";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Button } from "./Button";
import {
  FaBuilding,
  FaChild,
  FaEllipsis,
  FaHeart,
  FaMap,
  FaPaw,
  FaUser,
} from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";

export const Navbar = () => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);

  return (
    <div className="flex justify-evenly items-center z-20 h-18 mb-2 ">
      <img src={logo} alt="logo" className="max-w-24 max-h-18"/>
      <div className="flex gap-7 items-center">
        <ul className="flex gap-9 font-bold text-md items-center">
          <li
            className="relative py-6 flex items-center gap-1"
            onMouseEnter={() => setDrop1(!drop1)}
            onMouseLeave={() => setDrop1(!drop1)}
          >
            <a
              href="/"
              className="flex items-center gap-1 text-black hover:bg-indigo-100 px-3 py-1 rounded-md"
            >
              Donate {drop1 ? <GoChevronUp /> : <GoChevronDown />}
            </a>
            {drop1 && (
              <div className="absolute top-16 left-1/2 z-20 transform -translate-x-1/2 mt-4 shadow-lg px-8 py-4 bg-white rounded-md">
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h2 className="text-[10px] text-gray-400">
                      TO OUR MONTHLY MISSIONS
                    </h2>
                    <hr />
                    <div className="flex justify-between items-start gap-3">
                      <ul className="text-gray-600 flex flex-col gap-4 bg-white py-5 w-60 rounded-md">
                        {[
                          "No Child Orphaned",
                          "Protect Abandoned Elders",
                          "Safe Water for All",
                          "End Period Poverty",
                          "Stop Animal Cruelty",
                        ].map((item) => (
                          <li
                            key={item}
                            className={`cursor-pointer p-2 hover:bg-red-50`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <ul className="text-gray-600 flex flex-col gap-4 bg-white py-5 w-60 rounded-md">
                        {[
                          "Feed the Hungry",
                          "Right to Clean Air",
                          "Manage India's Waste",
                          "Every Girl in School",
                        ].map((item) => (
                          <li
                            key={item}
                            className={`cursor-pointer p-2 hover:bg-red-50`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[10px] text-gray-400">TO A CAUSE</h2>
                    <hr />
                    <ul className="text-gray-600 flex flex-col gap-4 bg-white py-5 w-60 rounded-md">
                      {[
                        { label: "Children", icon: <FaChild /> },
                        { label: "Health", icon: <FaHeart /> },
                        { label: "Animals", icon: <FaPaw /> },
                        { label: "Elderly", icon: <FaUser /> },
                        { label: "More", icon: <FaEllipsis /> },
                      ].map(({ label, icon }) => (
                        <li
                          key={label}
                          className="cursor-pointer p-2 hover:bg-red-50 flex items-center gap-2"
                        >
                          {icon}
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400">
                      TO NGOs IN YOUR AREA
                    </p>
                    <hr />
                    <ul className="text-gray-600 flex flex-col gap-4 bg-white py-5 w-60 rounded-md">
                      {[
                        { label: "Mumbai", icon: <GiIndiaGate /> },
                        { label: "Banglore", icon: <FaBuilding /> },
                        { label: "Delhi", icon: <GiIndiaGate /> },
                        { label: "Pan India", icon: <FaMap /> },
                      ].map(({ label, icon }) => (
                        <li
                          key={label}
                          className="cursor-pointer p-2 hover:bg-red-50 flex items-center gap-2"
                        >
                          {icon}
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>CSR</li>
          <li>Discover NGOs</li>

          <li
            className=" relative py-3 flex items-center gap-1"
            onMouseEnter={() => setDrop2(!drop2)}
            onMouseLeave={() => setDrop2(!drop2)}
          >
            <a
              href="/"
              className="flex items-center gap-1 text-balck hover:bg-indigo-100 px-3 py-1 rounded-md"
            >
              {" "}
              Gift Cards {drop2 ? <GoChevronUp /> : <GoChevronDown />}
            </a>
            {drop2 && (
              <ul className="absolute top-12 left-1/2 z-20 transform -translate-x-1/2 text-gray-600 flex flex-col gap-4 bg-white shadow-md py-5 w-60 rounded-md">
                <li className={`cursor-pointer p-2 hover:bg-red-50 `}>
                  Buy Gift Card{" "}
                  <span className="px-2 border items-center text-indigo-700 rounded-lg">
                    new
                  </span>
                </li>
                <li className={`cursor-pointer p-2 hover:bg-red-50 `}>
                  Claim Gift Card
                </li>
              </ul>
            )}
          </li>
          <li
            className=" relative py-3 flex items-center gap-1"
            onMouseEnter={() => setDrop3(!drop3)}
            onMouseLeave={() => setDrop3(!drop3)}
          >
            <a
              href="/"
              className="flex items-center gap-1 text-balck hover:bg-indigo-100 px-3 py-1 rounded-md"
            >
              {" "}
              About {drop3 ? <GoChevronUp /> : <GoChevronDown />}
            </a>
            {drop3 && (
              <ul className="absolute top-12 left-1/2 z-20 transform -translate-x-1/2 text-gray-600 flex flex-col gap-4 bg-white shadow-md py-5 w-60 rounded-md">
                {[
                  "Our Story",
                  "Blog",
                  "Start a Fundraiser",
                  "Join Us",
                  "Contact Us",
                ].map((item) => (
                  <li
                    key={item}
                    className={`cursor-pointer p-2 hover:bg-red-50 `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <Button text="Donate Monthly" className="bg-red-500 text-white" />
        <Button text="Login" className="bg-white text-black border" />
      </div>
    </div>
  );
};
