function RenderCharacters({ data, role }) {
  const renderCharacters = data?.pages.flatMap((page) => {
    if (!page || !page.edges) {
      return null;
    }

    const characters = page?.edges.filter(
      (character) => character.role === role
    );

    if (characters.length === 0) {
      return [];
    }

    return characters.map((character) => {
      const characterName = character.node.name.userPreferred;
      return (
        <div key={character.id} className="cursor-pointer">
          <div className="relative transition ease-in-out duration-200 hover:scale-125 h-[100px] w-[66px]">
            <img
              className="h-[100px] w-[66px]"
              src={character.node.image.large}
              alt={characterName}
            />
            <span className="absolute z-40 top-0 p-1 w-full h-full bg-gray-900/80 text-sm text-slate-50 opacity-0 hover:opacity-100 transition-opacity duration-200">
              {characterName}
            </span>
          </div>
        </div>
      );
    });
  });

  if (!renderCharacters || renderCharacters.length === 0) return;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">{role}</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {renderCharacters}
      </div>
    </div>
  );
}

export default RenderCharacters;
