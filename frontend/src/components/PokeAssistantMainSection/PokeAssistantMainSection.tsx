import PokemonInputSection from "./PokemonInputSection";

const PokeAssistantMainSection: React.FC = () => {
  return (
    <div className="px-14 py-10 relative grow bg-black/50 rounded-t-[30px] flex justify-between">
      <div className="flex flex-col gap-10">
        <PokemonInputSection />
        <div>Type Chart goes here</div>
      </div>
      <div></div>
    </div>
  );
};

export default PokeAssistantMainSection;
