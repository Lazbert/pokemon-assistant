import Slider, { Settings } from "react-slick";
import { POKEMON_TYPE_RELATIONSHIPS } from "./pokemonTypes";

const PokemonTypeSlider: React.FC = () => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      {Object.entries(POKEMON_TYPE_RELATIONSHIPS).map((pokemonType) => (
        <div className="p-8 rounded-[30px] flex justify-center items-center">
          <img />
          <div className="flex flex-col justify-center"></div>
        </div>
      ))}
    </Slider>
  );
};

export default PokemonTypeSlider;
