import { useEffect } from "react";
import AnimeCard from "./AnimeCard";
import { data } from "./Data";
import gsap from "gsap";

function App() {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 }); // Infinite loop with yoyo effect
        tl.to(".aa", {
            y: "-400%", // Move upwards
            duration: 10,
            ease: "linear",
        });
    }, []);
    return (
        <>
            <div className="min-h-screen bg-gray-950 overflow-hidden">
                <div className="flex flex-col h-screen w-full rotate-6">
                    <div className="aa w-full h-full flex flex-col">
                        {data.slice(0, 15).map((anime, index) => {
                            return <AnimeCard anime={anime} key={index} />;
                        })}
                        {/* Make sure to duplicate the cards, it will create a illusion of infinite loop */}
                        {/* I also removed many cards from Data.jsx and made sure that there was 12 Cards */}
                        {data.slice(0, 15).map((anime, index) => {
                            return <AnimeCard anime={anime} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
