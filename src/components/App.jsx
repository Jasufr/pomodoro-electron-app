import React from "react";

function App() {
  return (
    <div className="h-full flex flex-col flex-1">
      <div className="relative flex-1 flex flex-col justify-center items-center bg-amber-100 my-8 mx-12">
        <nav className="absolute top-2">
          <ul className="flex justify-evenly gap-5 px-5 py-3">
            <li>TIMER</li>
            <li>BREAK</li>
          </ul>
        </nav>
        <h1 className="text-3xl">25:00</h1>
        <button className="bg-black text-white px-3 py-1 absolute bottom-2 hover:bg-gray-600">
          Start/Stop
        </button>
      </div>
      <div className="w-full h-2 bg-green-500"></div>
      {/* <Canvas> */}
    </div>
  );
}

export default App;
