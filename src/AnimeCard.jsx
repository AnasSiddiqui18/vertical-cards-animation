/* eslint-disable react/prop-types */
import { useRef } from "react";

const AnimeCard = ({ anime }) => {
  const cardsRef = useRef(null);
  return (
    // Gave a fixed height of 33.3333%, it may flicker a little bit.
    <div
      className="flex h-1/3 gap-x-8 justify-end py-5 mr-5 transition-all"
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
