export const seasonOfYear = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const seasons = [
    { label: "Winter", months: [1, 2, 3] },
    { label: "Spring", months: [4, 5, 6] },
    { label: "Summer", months: [7, 8, 9] },
    { label: "Fall", months: [10, 11, 12] },
  ];
  let currentSeason = null;
  let nextSeason = null;
  let seasonYear = year;

  seasons.forEach((season) => {
    if (season.months.includes(month)) {
      currentSeason = season.label;
    }
    const currentIndex = seasons.findIndex((s) => s.label === currentSeason);
    const nextIndex = (currentIndex + 1) % seasons.length;
    nextSeason = seasons[nextIndex].label;
  });

  if (currentSeason === "FALL") {
    seasonYear = year + 1;
  }

  return { currentSeason, nextSeason, seasonYear };
};
