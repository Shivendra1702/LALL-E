import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className=" group rounded-xl relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-full rounded-xl object-cover"
      />
      <div
        className="absolute hidden group-hover:flex flex-col bottom-0 left-0 right-0 m-2 p-4 rounded-md
      bg-[#10131f] max-h-[94.5%]
      "
      >
        <p className="text-white overflow-y-auto prompt">{prompt}</p>

        <div className="mt-4 flex justify-between items-center gap-2">
          <div className="flex justify-between  gap-4 items-center">
            <div className="text-white bg-[green] w-10 h-10 flex justify-center items-center border-[2px] text-[20px] rounded-full ">
              {name[0]}
            </div>
            <p className="text-[#959595] text-[16px]">{name}</p>
          </div>

          <button
            type="button"
            onClick={() => downloadImage({ _id, photo })}
            className="w-10 h-10 bg-transparent  border-none outline-none"
          >
            <img src={download} alt="download" className="invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
