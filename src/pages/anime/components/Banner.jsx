import Score from "./Score";

function Banner({ bannerImage, coverImage, score }) {
  return (
    <div className="relative">
      <div className="w-full h-[140px] xl:h-[400px] md:h-[300px] sm:h-[300px]">
        <img
          src={bannerImage ? bannerImage : coverImage}
          className="w-full h-full object-cover opacity-80 dark:opacity-60"
        />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <Score className="absolute bottom-6" score={score} />
      </div>
    </div>
  );
}

export default Banner;
