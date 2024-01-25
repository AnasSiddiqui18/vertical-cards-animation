/* eslint-disable react/prop-types */

const AnimeCard = ({ anime }) => {
  return (
    // Gave a fixed height of 33.3333%, it may flicker a little bit.
    <div className="w-fit">
      <img
        className="w-[200px] rounded-md shadow-md shadow-orange-300"
        src={anime.image.original}
        alt="#"
      />
    </div>
  );
};

export default AnimeCard;
