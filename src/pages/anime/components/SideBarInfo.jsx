function SideBarInfo({ title, data, capitalize }) {
  const toCapitalCase = (str) => {
    if (typeof str !== "string" || str.length === 0 || !capitalize) return str;
    const words = str.toLowerCase().split(" ") && str.toLowerCase().split("_");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  };

  return (
    <div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs">{toCapitalCase(data) || "-"}</p>
    </div>
  );
}

export default SideBarInfo;
