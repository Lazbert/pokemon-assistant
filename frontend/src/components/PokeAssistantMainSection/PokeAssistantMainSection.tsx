import PokemonSearchSection from "./PokemonSearchSection";
import PokemonTypeSlider from "./PokemonTypeSlider";

const PokeAssistantMainSection: React.FC = () => {
  return (
    <div className="px-14 py-10 relative grow bg-black/50 rounded-t-[30px] flex justify-between">
      <div className="w-[45%] flex flex-col gap-10">
        <PokemonSearchSection />
        <PokemonTypeSlider />
      </div>
      <div></div>
    </div>
  );
};

export default PokeAssistantMainSection;
