import { Navbar } from "./components/Navbar";
import CustomSlides from "./components/CustomSlides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SecoundPage } from "./components/SecoundPage";
import { Cards } from "./components/Cards";
import { Button } from "./components/Button";
import { Marquees } from "./components/Marquees";

function App() {
  return (
    <div className="">
      <Navbar />
      <CustomSlides />

      <section>
        <SecoundPage />
        <Cards />
        <div className="relative">
          <Button
            text={"View More Mission"}
            className="bg-white text-gray-600 border absolute right-[349px]"
          />
        </div>
      </section>

      <Marquees />

      <section>
            
      </section>
    </div>
  );
}

export default App;
