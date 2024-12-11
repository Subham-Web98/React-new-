import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [stringAllowed, setStringAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (stringAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, stringAllowed]);

  const copyPassword = function () {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, numberAllowed, stringAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-600 text-white">
      <h1 className="text-white text-center my-3 text-4xl font-semibold mb-6">
        Password Generator
      </h1>
      <div className=" flex shadow-md rounded-md overflow-hidden mb-4 py-4 px-2">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-slate-900 text-white mr-3 rounded-lg"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div className="flex-col text-sm gap-x-2   ">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            name=""
            id=""
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length" className="font-medium text-base">
            Length : {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer"
            name=""
            id=""
          />
          <label htmlFor="number" className="font-medium text-base">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={stringAllowed}
            onChange={() => setStringAllowed((prev) => !prev)}
            className="cursor-pointer"
            name=""
            id=""
          />
          <label htmlFor="strings" className="font-medium text-base">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;

//* GPT improve Code

// import { useState, useCallback, useRef } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [stringAllowed, setStringAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const generatePassword = useCallback(() => {
//     let password = "";
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (numberAllowed) str += "0123456789";
//     if (stringAllowed) str += "!@#$%^&*()_+";
//     for (let i = 0; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length);
//       password += str.charAt(char);
//     }
//     setPassword(password);
//   }, [length, numberAllowed, stringAllowed]);

//   const copyPassword = useCallback(() => {
//     if (password) {
//       window.navigator.clipboard.writeText(password);
//       alert("Password copied to clipboard!");
//     }
//   }, [password]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-slate-600 text-white md:max-w-lg lg:max-w-xl">
//       <h1 className="text-white text-center my-3 text-3xl font-bold mb-6 md:text-4xl">
//         Password Generator
//       </h1>
//       <div className="flex flex-col md:flex-row items-center shadow-md rounded-md overflow-hidden mb-6 py-4 px-2 bg-slate-700">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-2 px-3 bg-slate-900 text-white mr-0 mb-3 md:mb-0 md:mr-3 rounded-lg flex-1"
//           placeholder="Generated password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPassword}
//           className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition duration-200"
//         >
//           Copy
//         </button>
//       </div>
//       <div className="flex flex-col text-sm gap-y-4">
//         <div className="flex flex-col md:flex-row items-center gap-x-3 gap-y-2">
//           <label htmlFor="length" className="font-medium text-base">
//             Length:
//           </label>
//           <input
//             type="range"
//             min={8}
//             max={20}
//             value={length}
//             className="cursor-pointer flex-1"
//             id="length"
//             onChange={(e) => setLength(Number(e.target.value))}
//           />
//           <span className="text-sm font-medium">{length}</span>
//         </div>
//         <div className="flex items-center gap-x-2">
//           <input
//             type="checkbox"
//             checked={numberAllowed}
//             onChange={() => setNumberAllowed((prev) => !prev)}
//             className="cursor-pointer"
//             id="numbers"
//           />
//           <label htmlFor="numbers" className="font-medium text-base">
//             Include Numbers
//           </label>
//         </div>
//         <div className="flex items-center gap-x-2">
//           <input
//             type="checkbox"
//             checked={stringAllowed}
//             onChange={() => setStringAllowed((prev) => !prev)}
//             className="cursor-pointer"
//             id="special-characters"
//           />
//           <label htmlFor="special-characters" className="font-medium text-base">
//             Include Special Characters
//           </label>
//         </div>
//       </div>
//       <div className="mt-6 text-center">
//         <button
//           onClick={generatePassword}
//           className="bg-green-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-green-600 transition duration-200 w-full md:w-auto"
//         >
//           Generate Password
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
