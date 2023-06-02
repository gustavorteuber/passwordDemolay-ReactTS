import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cooperlipto from "../assets/Cooperlipto.png";
import Elixir from "../assets/Elixir.png";
import Guardemais from "../assets/Guardemais.png";
import Mkraft from "../assets/Mkraft.png";
import Salles from "../assets/Salles - Ouro.jpeg";

const CarouselGold = () => {
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
          <img className="ouro" src={Cooperlipto} alt="patrocinio" />
        </div>
        <div>
          <img className="ouro" src={Elixir} alt="patrocinio" />
        </div>
        <div>
          <img className="ouro" src={Guardemais} alt="patrocinio" />
        </div>
        <div>
          <img className="ouro" src={Mkraft} alt="patrocinio" />
        </div>
        <div>
          <img className="ouro" src={Salles} alt="patrocinio" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselGold;
