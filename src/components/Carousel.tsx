import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cooperlipto from "../assets/Cooperlipto.png";
import Elixir from "../assets/Elixir.png";
import Guardemais from "../assets/Guardemais.png";
import Mkraft from "../assets/Mkraft.png";

const Carousel = () => {
  const settings = {
    slidesToShow: 3,
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
          <img src={Cooperlipto} alt="patrocinio" />
        </div>
        <div>
          <img src={Elixir} alt="patrocinio" />
        </div>
        <div>
          <img src={Guardemais} alt="patrocinio" />
        </div>
        <div>
          <img src={Mkraft} alt="patrocinio" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
