function Content({ children, className }) {
  return (
    <div className={`${className} max-w-[1200px] mx-auto my-6`}>{children}</div>
  );
}
export default Content;
