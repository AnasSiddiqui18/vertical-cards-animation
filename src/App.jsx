import AnimeCard from "./AnimeCard";
import { data } from "./Data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  useGSAP(() => {
    const tl1 = gsap.timeline({ repeat: -1 }); // Infinite loop with yoyo effect for the first column
    tl1.to(".aa", {
      y: "-400%", // Move upwards
      duration: 30,
      ease: "linear",
    });

    const tl2 = gsap.timeline({ repeat: -1 }); // Infinite loop with yoyo effect for the second column
    tl2.from(".second_col", {
      y: "-400%", // Move downwards
      duration: 30,
      ease: "linear",
    });

    // const combinedTimeline = gsap.timeline(); // Create a combined timeline

    // Play both timelines together with adjusted offsets
    // combinedTimeline.add(tl1).add(tl2, 1); // 1-second offset to start the second timeline 1 second after the first one

    const tl3 = gsap.timeline({ repeat: -1 }); // Infinite loop with yoyo effect for the third column
    tl3.to(".third_col", {
      y: "-400%", // Move downwards
      duration: 30,
      ease: "linear",
    });

    // Add the third timeline to the combined timeline with a 2-second offset
    // combinedTimeline.add(tl3, 2); // 2-second offset to start the third timeline 2 seconds after the second one
  }, []);

  const slicedData = [...data];
  console.log(slicedData);

  return (
    <>
      <div className="min-h-screen bg-gray-950 overflow-hidden flex justify-end">
        <div className="flex h-screen w-auto rotate-6 gap-x-5">
          <div className="aa w-full h-full flex flex-col gap-y-10">
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
          </div>
          <div className="second_col w-full h-full flex flex-col gap-y-10">
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
          </div>
          <div className="third_col w-full h-full flex flex-col gap-y-10">
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
            {slicedData.map((anime, index) => {
              return <AnimeCard anime={anime} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
