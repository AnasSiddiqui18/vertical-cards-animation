/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Linear, gsap } from "gsap";

const AnimeCard = ({ anime }) => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop with yoyo effect

    tl.to(cardsRef.current.querySelectorAll("img"), {
      y: -100, // Move upwards
      duration: 2,
      ease: Linear,
      yoyo: false,
    });
  }, []);
  return (
    <div
      className="flex gap-x-8 justify-end py-5 mr-5 transition-all"
      id="victim"
      ref={cardsRef}
    >
      <div className="flex anime-card" id="victim_01">
        <img
          className="w-[200px] rounded-md shadow-md shadow-orange-300"
          src={anime.image.original}
          alt="#"
        />
      </div>
      <div className="flex anime-card" id="victim_02">
        <img
          className="w-[200px] rounded-md shadow-md shadow-orange-300"
          src={anime.image.original}
          alt=""
        />
      </div>
      <div className="flex anime-card" id="victim_03">
        <img
          className="w-[200px] rounded-md shadow-md shadow-orange-300"
          src={anime.image.original}
          alt=""
        />
      </div>
    </div>
  );
};

export default AnimeCard;
