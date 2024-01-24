import AnimeCard from "./AnimeCard";
import { data } from "./Data";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 overflow-hidden">
        <div className="flex flex-col  rotate-6 mr-[30px] mt-[-130px] ">
          {data.slice(0, 15).map((anime, index) => {
            return <AnimeCard anime={anime} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
