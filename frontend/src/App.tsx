import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <>
      <div className="fixed inset-0 bg-indigo-500/25"></div>
      <div className="bg-pokemon-theme bg-cover w-full h-full flex flex-col">
        <HeaderBar />
        <div className="relative grow bg-black/50 rounded-[20px]"></div>
      </div>
    </>
  );
}

export default App;
