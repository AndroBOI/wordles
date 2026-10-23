import { useState, useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef(null);

  const word = "hello";

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

  function onSubmit() {
    if (
      input1 === "" ||
      input2 === "" ||
      input3 === "" ||
      input4 === "" ||
      input5 === ""
    )
      return;

    const extractedValue = input1 + input2 + input3 + input4 + input5;

    alert(extractedValue);
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setInput5("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center gap-x-5">
        <input
          ref={inputRef}
          maxLength={1}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          onChange={(e) => setInput1(e.target.value)}
          value={input1}
          className={`border-2 border-gray-400 h-20 w-20 rounded-md flex justify-center items-center  text-2xl text-center`}
        />

        <input
          maxLength={1}
          onChange={(e) => setInput2(e.target.value)}
          value={input2}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          type="text"
          className={`border-2 border-gray-400 h-20 w-20 rounded-md flex justify-center items-center  text-2xl text-center`}
        />

        <input
          maxLength={1}
          onChange={(e) => setInput3(e.target.value)}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={input3}
          className={`border-2 border-gray-400 h-20 w-20 rounded-md flex justify-center items-center  text-2xl text-center`}
        />

        <input
          maxLength={1}
          onChange={(e) => setInput4(e.target.value)}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={input4}
          className={`border-2 border-gray-400 h-20 w-20 rounded-md flex justify-center items-center  text-2xl text-center`}
        />

        <input
          maxLength={1}
          onChange={(e) => setInput5(e.target.value)}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={input5}
          className={`border-2 border-gray-400 h-20 w-20 rounded-md flex justify-center items-center  text-2xl text-center`}
        />
      </div>
    </>
  );
};

export default App;
