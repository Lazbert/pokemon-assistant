import React, { useState } from "react";
import PokemonInput from "./PokemonInput";
import { Button } from "@chakra-ui/react";

const PokemonInputSection: React.FC = () => {
  const [firstPokemon, setFirstPokemon] = useState("");
  const [secondPokemon, setSecondPokemon] = useState("");
  const [thirdPokemon, setThirdPokemon] = useState("");
  return (
    <div className="h-fit px-10 py-6 border-2 border-blue-800 rounded-[20px] flex flex-col items-center gap-4">
      <span className="text-[20px] font-bold self-start">
        Pokemon(s) you want in your core...
      </span>
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
      <Button colorScheme="blue" variant="outline">
        Search
      </Button>
    </div>
  );
};

export default PokemonInputSection;
