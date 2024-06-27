function CoverImage({ data }) {
  return (
    <div className="w-[230px]">
      <div>
        <img className="w-[230px]" src={data.coverImage.large} />
      </div>
    </div>
  );
}

export default CoverImage;
