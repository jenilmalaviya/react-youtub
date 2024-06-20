import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "black" }}
          >
            black
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ background: "olive" }}
          >
            {" "}
            olive
          </button>
        </div>
      </div>
      {/* Add any content you want here */}
    </div>
  );
}

export default App;
