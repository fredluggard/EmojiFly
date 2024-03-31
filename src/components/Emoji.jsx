import React, { useState, useEffect } from "react";
import emojiData from "./data.json";

function Emoji() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
    alert(`Copied ${symbol} to clipboard!`);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(input.toLocaleLowerCase())
    );
    setData(newData);
  }, [input]);

  return (
    <div>
      <input
        className="w-[700px] h-16 px-2 text-2xl border-2 border-orange-500 outline-2 outline-orange-500"
        type="text"
        placeholder="Search for emoji..."
        value={input}
        onChange={handleChange}
      />
      <div className="flex flex-wrap gap-1 justify-center items-center m-6 py-6">
        {input === "" ? (
          <h1 className="flex text-3xl py-6">Start typing to see an emoji </h1>
        ) : (
          data.map((emoji) => (
            <p
              className="flex text-5xl py-5 px-4 cursor-pointer hover:bg-orange-500"
              key={emoji.title}
              onClick={() => handleCopy(emoji.symbol)}
            >
              {emoji.symbol}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Emoji;
