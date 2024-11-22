import { Navbar } from "./components/Navbar";
import CustomSlides from "./components/CustomSlides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SecoundPage } from "./components/SecoundPage";
import { Cards } from "./components/Cards";
import { Button } from "./components/Button";
import { Marquees } from "./components/Marquees";
import { SupportCard } from "./components/SupportCard";
import { data } from "./datas/Info";

function App() {
  return (
    <div className="">
      <Navbar />
      <CustomSlides />

      <section>
        <SecoundPage />
        {/* <Cards /> */}
        <div className="container mx-auto grid grid-cols-3 gap-5 px-40  mb-4">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                <Cards item={item} />
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

      <Marquees />

      <section className="">
        <div className="my-20 container mx-80 ">
          <h1 className="text-4xl font-bold ">Support a fundraiser</h1>
          <p className="text-2xl w-1/3 text-gray-500 my-4">
            Pick a cause close to your heart and donate now
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-3 gap-5 px-40  mb-4">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                <SupportCard item={item} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
