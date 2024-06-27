function Logo() {
  return (
    <div className="flex-none relative flex items-center">
      <img src="src\assets\logo3.png" className="absolute left-12 -top-7" />
      <div>
        <h1 className=" text-red-500 font-bold text-2xl">
          ANIME<span className="text-slate-500 dark:text-slate-200">DB</span>
        </h1>
      </div>
    </div>
  );
}

export default Logo;
