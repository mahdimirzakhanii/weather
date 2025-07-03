const Loading = () => {
  return (
    <div className="w-full flex items-center min-h-[90vh] justify-around">
      <img src="/wired-gradient-18-location-pin-hover-jump.gif" width={500} />
      <div className="flex flex-col gap-5 items-start  w-1/2">
        <div className="flex items-center gap-3">
          <span className="text-6xl min-h-[100px] flex items-center justify-center font-serif bg-gradient-to-r from-[#e83a30] to-[#1663c7] text-transparent bg-clip-text">
            Getting Your Location...
          </span>
          <span className="text-5xl font-serif text-[#1663c7]">!</span>
        </div>
        <div className="flex items-center w-full">
          <button
            onClick={() => window.location.reload()}
            className="text-xl cursor-pointer shadow-lg hover:shadow-sm duration-500 bg-blue-100 rounded-md px-5 py-3"
          >
            Reafresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loading;
