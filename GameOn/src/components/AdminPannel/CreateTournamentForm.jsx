import axios from "axios";
import { useState } from "react";
import { toast } from 'react-hot-toast';

import { useNavigate } from "react-router-dom";


export default function CreateTournamentForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState('AM');
  const [map, setMap] = useState("Bermuda");
  const [mode, setMode] = useState("SOLO");

  const [prizePool, setPrizePool] = useState("");
  const [perKill, setPerKill] = useState("");
  const [joinCoins, setJoinCoins] = useState("");
  const [totalPlayers, setTotalPlayers] = useState("");
  const [leftPlayers, setLeftPlayers] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmitTournament = async (e) => {
    e.preventDefault();
    const res = await axios.post(`https://backend-1-otqg.onrender.com/api/create-tournament`, {
      date,
      time,
      amPm,
      map,
      prizePool,
      mode,
      perKill,
      joinCoins,
      totalPlayers,
      leftPlayers,
    });

    if (res.data.success === true) {
      navigate("/home/tournaments");
    } else {
      toast.error(res.data.message);
     
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-4 border-2 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">Create Tournament</h1>
        <form onSubmit={handleSubmitTournament} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Create Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <label className="block text-sm font-medium text-gray-700 sm:w-[50%] sm:text-right sm:mr-3">Create Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-[200px]"
            />
            <select
              value={amPm}
              onChange={(e) => setAmPm(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-[100px]"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Map</label>
            <select
              value={map}
              onChange={(e) => setMap(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="bermuda">Bermuda</option>
              <option value="kalahari">Kalahari</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Map</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">SOLO</option>
              <option value="">SQUAD</option>
              <option value="">DUO</option>
              <option value="">CLASH SQUAD</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Prize Pool</label>
            <input
              type="number"
              value={prizePool}
              onChange={(e) => setPrizePool(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter prize pool amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Per Kill</label>
            <input
              type="number"
              value={perKill}
              onChange={(e) => setPerKill(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter per kill amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Join Coin</label>
            <input
              type="number"
              value={joinCoins}
              onChange={(e) => setJoinCoins(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter join coin amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Players</label>
            <input
              type="number"
              value={totalPlayers}
              onChange={(e) => setTotalPlayers(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter total player"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Left players</label>
            <input
              type="number"
              value={leftPlayers}
              onChange={(e) => setLeftPlayers(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter left players"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Tournament
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
