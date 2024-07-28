import { useState, useEffect } from "react";
import SurprisedPikachu from "../assets/surprised-pikachu.gif";
import axios from "axios";

interface HeaderBarProps {
  pokemons?: Array<string>;
}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_POKEMONS = ["chandelure", "xerneas", "clodsire"];

const HeaderBar: React.FC<HeaderBarProps> = ({ pokemons }) => {
  const [pokemonGifs, setPokemonGifs] = useState<Array<string>>([]);

  useEffect(() => {
    const usePokemons = pokemons || DEFAULT_POKEMONS;
    usePokemons.map((pokemonName) => {
      axios.get(`${BASE_URL}/${pokemonName}`).then((response) => {
        const pokemonGifUrl =
          response.data.sprites.other.showdown.front_default ||
          response.data.sprites.front_default;
        setPokemonGifs((prevPokemonGifs) => [
          ...prevPokemonGifs,
          pokemonGifUrl,
        ]);
      });
    });
    return () => setPokemonGifs([]);
  }, []);

  return (
    <div className="relative px-4 py-6  flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img src={SurprisedPikachu} className="w-[35px] h-[35px] rounded-md" />
        <span className="whitespace-nowrap font-bold text-[24px]">
          Pokemon Assistant
        </span>
      </div>
      <div className="flex gap-2 items-center">
        {pokemonGifs.map((pokemonGifUrl, index) => (
          <img key={index} src={pokemonGifUrl} className="w-[35px] h-[35px]" />
        ))}
      </div>
    </div>
  );
};

export default HeaderBar;
