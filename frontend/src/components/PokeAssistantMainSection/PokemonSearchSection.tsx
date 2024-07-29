import React, { useState } from "react";
import PokemonInput from "./PokemonInput";
import { Button } from "@chakra-ui/react";

const PokemonSearchSection: React.FC = () => {
  const [firstPokemon, setFirstPokemon] = useState("");
  const [secondPokemon, setSecondPokemon] = useState("");
  const [thirdPokemon, setThirdPokemon] = useState("");
  return (
    <div className="h-fit px-10 py-6 border-2 border-blue-800 rounded-[20px] flex flex-col items-center gap-6">
      <span className="text-[20px] font-bold self-start">
        Pokemon(s) you want in your core...
      </span>
      <div className="w-full self-start flex gap-10">
        <div className="w-1/2 flex flex-col gap-4">
          <PokemonInput
            pokemon={firstPokemon}
            setPokemon={setFirstPokemon}
            placeholder="First Pokemon"
          />
          <PokemonInput
            pokemon={secondPokemon}
            setPokemon={setSecondPokemon}
            placeholder="Second Pokemon"
          />
          <PokemonInput
            pokemon={thirdPokemon}
            setPokemon={setThirdPokemon}
            placeholder="Third Pokemon"
          />
        </div>
        <div>Filters go here</div>
      </div>
      <Button className="w-1/2" colorScheme="blue" variant="outline">
        Search
      </Button>
    </div>
  );
};

export default PokemonSearchSection;
