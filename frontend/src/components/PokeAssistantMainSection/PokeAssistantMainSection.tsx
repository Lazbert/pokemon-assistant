import PokemonSearchSection from "./PokemonSearchSection";
import PokemonTypeSlider from "../PokemonTypeSlider";

const PokeAssistantMainSection: React.FC = () => {
  return (
    <div className="px-14 py-10 relative grow bg-black/50 rounded-t-[30px] flex gap-8">
      <div className="w-1/2 flex flex-col">
        <PokemonSearchSection />
        <PokemonTypeSlider />
      </div>
      <div className="w-full">Search results go here</div>
    </div>
  );
};

export default PokeAssistantMainSection;
