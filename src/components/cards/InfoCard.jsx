function InfoCard({ children, className }) {
  return (
    <div
      className={`p-2 bg-slate-200 dark:bg-slate-800 text-wrap rounded-md ${className}`}
    >
      {children}
    </div>
  );
}
export default InfoCard;
