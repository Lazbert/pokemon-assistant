import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Pokeball from "../../assets/pokeball.svg";

interface PokemonInputProps {
  pokemon: string;
  setPokemon: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const PokemonInput: React.FC<PokemonInputProps> = ({
  pokemon,
  setPokemon,
  placeholder,
}) => {
  return (
    <div className="flex items-center gap-2">
      <InputGroup>
        <InputLeftElement>
          <img src={Pokeball} className="w-[25px] h-[25px]" />
        </InputLeftElement>
        <Input
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          variant="flushed"
          placeholder={placeholder}
        />
      </InputGroup>
    </div>
  );
};

export default PokemonInput;
