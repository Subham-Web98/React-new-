import { useState } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("olive");
  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <div
      className="w-full h-screen flex flex-col justify-start"
      style={{ backgroundColor: color }}
    >
      <div className=" flex justify-center gap-4 m-4">
        <button
          // onClick={() => changeColor("green")}
          onClick={() => setColor("green")}
          className="green bg-green-500 rounded-full px-8 py-4"
        >
          Green
        </button>
        <button
          // onClick={() => changeColor("blue")}
          onClick={() => setColor("blue")}
          className="blue bg-blue-500 rounded-full px-8 py-4"
        >
          Blue
        </button>
        <button
          // onClick={() => changeColor("yellow")}
          onClick={() => setColor("yellow")}
          className="yellow bg-yellow-500 rounded-full px-8 py-4"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;
