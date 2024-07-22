/* eslint-disable react/prop-types */
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function PlayerIdName({ onClose, onJoin }) {
  const [playerName, setPlayerName] = useState("");

  const handleAddClick = () => {
    if (playerName.trim() === "") {
      alert("Please enter your game name.");
      return;
    }
    onJoin(playerName);
  };

  return (
    <div className="fixed w-full h-screen top-0 flex items-center justify-center bg-slate-900 bg-opacity-75">
      <div className="w-[400px] h-[300px] bg-yellow-400 rounded-lg shadow-lg">
        <div className="flex items-center justify-end p-2">
          <CloseIcon className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="flex items-center justify-center flex-col h-full">
          <label htmlFor="playerName" className="text-red-500 font-bold text-center mb-3">
            *Do not provide the wrong name, or you will be kicked from the room.
          </label>
          <input
            type="text"
            id="playerName"
            placeholder="Free fire game name"
            className="p-2 outline-none border-b-2 border-black"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleAddClick} className="p-2 w-[200px] mt-2 text-white bg-green-500 hover:bg-green-300">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
