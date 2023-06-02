import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lufiego from "../assets/LufiegoAdvocacia - Bronze.png";
import Rodalog from "../assets/Rodalog - Bronze.png";

const CarouselBronze = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className="all">
      <Slider {...settings}>
        <div>
          <img className="bronze" src={Lufiego} alt="patrocinio" />
        </div>
        <div>
          <img className="bronze " src={Rodalog} alt="patrocinio" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselBronze;
