import { Navbar } from "./components/Navbar";
import CustomSlides from "./components/CustomSlides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SecoundPage } from "./components/SecoundPage";
import { Cards } from "./components/Cards";
import { Button } from "./components/Button";
import { Marquees } from "./components/Marquees";
import { data } from "./datas/Info";
import img from "./images/xyz.webp";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="">
      <section>
        <Navbar />
        <CustomSlides type="first" />
      </section>

      <section className="mb-44">
        <SecoundPage />
        {/* <Cards /> */}
        <div className="container mx-auto grid grid-cols-3 gap-5 px-40  mb-4">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                <Cards item={item} type="monthly" />
              </div>
            ))}
        </div>

        <div className="relative">
          <Button
            text={"View More Mission"}
            className="bg-white text-gray-600 border absolute right-[349px]"
          />
        </div>
      </section>

      <section className="bg-gray-100 border pb-36">
        <Marquees />
        <div className="my-20 container mx-80 ">
          <h1 className="text-4xl font-bold ">Support a fundraiser</h1>
          <p className="text-2xl w-1/3 text-gray-500 my-4">
            Pick a cause close to your heart and donate now
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-3 gap-5 px-40 mb-5">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                <Cards item={item} type="support" />
              </div>
            ))}
        </div>
        <div className="relative">
          <Button
            text={"See More"}
            className="bg-white text-gray-600 border absolute right-[349px] mt-10"
          />
        </div>
      </section>

      <section className="container mx-auto my-20 px-40">
        <h1 className="text-4xl font-bold ">Our trusted NGO partners</h1>
        <p className="text-xl my-4 text-gray-500">
          We have been raising funds for credible nonprofits for 20+ years
        </p>
        <div>
          <CustomSlides type="second" />
        </div>
        <div className="flex justify-around bg-pink-100 py-5 mt-32">
          <div className="flex flex-col items-start justify-center gap-5 px-20">
            <h1 className="text-4xl font-bold text-gray-800">
              Raise funds for your cause!
            </h1>
            <p className="text-2xl text-gray-500">
              Onboard on Give.do and create impact by raising funds for your
              initiatives
            </p>
            <div className="flex gap-7">
              <Button
                text={"Enroll your NGO on given"}
                className="bg-red-500 text-white border hover:bg-red-400"
              />
              <Button
                text={"Raise founds for a listed NGO"}
                className="bg-white text-black border"
              />
            </div>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto w-full flex flex-col items-center justify-center">
          <div className="mt-16">
               <div className="bg-gray-50 w-96 h-48 rounded-t-full rounded-l-full rounded-r-full rounded-b-xl relative z-10"></div>
              <img src={logo} alt="logo" className="max-w-16 max-h-10 relative left-36 bottom-20 z-20" />
          </div>
          <h1 className="text-5xl text-gray-800 font-bold w-1/2 text-center -mt-[70px] z-20">India's most trusted online donation platform</h1>
          <div className="flex justify-around items-center gap-20 shadow-lg border px-16 py-7 my-12">
            <p className="flex flex-col">
              <span className="text-4xl font-bold">2.7M+</span>
              <span>Donation</span>
            </p>
            <p className="flex flex-col">
              <span className="text-4xl font-bold">15M+</span>
              <span>Lives Impacted</span>
            </p>
            <p className="flex flex-col">
              <span className="text-4xl font-bold">3000+</span>
              <span>Verified Non Profits</span>
            </p>
            <p className="flex flex-col">
              <span className="text-4xl font-bold">300+</span>
              <span>Corporate Partners</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col gap-6 px-40 py-20">
        <h1 className="text-4xl font-bold"><span className="text-red-600 text-5xl font-bold">give</span> in the News</h1>
        <p className="text-xl text-gray-500">Some stories in the media featuring Give</p>
        <div>
            <div>
                <CustomSlides type="third"/>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
