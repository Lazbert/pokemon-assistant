import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { POKEMON_TYPE_RELATIONSHIPS, PokemonType } from "./pokemonTypes";
import pokemonTypeIcons from "./pokemonTypeIcons";
import "./pokemonTypeIcons.css";

const PokemonTypeSlider: React.FC = () => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div className="grow slider-container">
      <Slider {...settings}>
        {Object.entries(POKEMON_TYPE_RELATIONSHIPS).map(
          ([pokemonType, pokemonTypeDetails], ind) => {
            return (
              <div
                key={ind}
                className="px-2 py-8 rounded-[30px] flex flex-col justify-center items-center"
              >
                <div className="flex gap-4">
                  <div
                    className={`${pokemonType.toLowerCase()} w-fit rounded-full p-5 hover:animate-jump`}
                  >
                    <img
                      src={pokemonTypeIcons[pokemonType as PokemonType]}
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    {pokemonType}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Slider>
    </div>
  );
};

export default PokemonTypeSlider;
