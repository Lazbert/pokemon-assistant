import HeaderBar from "./components/HeaderBar";
import PokeAssistantMainSection from "./components/PokeAssistantMainSection/PokeAssistantMainSection";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="fixed inset-0 bg-indigo-300/10"></div>
      <div className="bg-pokemon-theme bg-cover w-full h-full flex flex-col">
        <HeaderBar />
        <PokeAssistantMainSection />
      </div>
    </ChakraProvider>
  );
}

export default App;
