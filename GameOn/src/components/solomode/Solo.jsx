/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import PlayerIdName from "../PlayerIdName";
import { updateUserPrice } from "../redux/userSlice";
import RoomId from "./RoomId";

export default function Solo({ data2 }) {
  const dispatch = useDispatch();
  const { currentUser, userRoomIdAndPass } = useSelector((state) => state.user);
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [showPlayerIdName, setShowPlayerIdName] = useState(false);

  const joinedPlayers = data2.totalPlayers - data2.leftPlayers;
  const joinedPercentage = (joinedPlayers / data2.totalPlayers) * 100;

  const [viewDetails, setViewDetails] = useState(false);
  const [viewDetailsAdmin, setViewDetailsAdmin] = useState(false);

  useEffect(() => {
    if (data2 && currentUser) {
      const userHasJoined = data2.owner.includes(currentUser?.data._id);
      setAlreadyJoined(userHasJoined);
    }
  }, [data2, currentUser]);

  const handleOnJoinClick = () => {
    setShowPlayerIdName(true);
  };
  const handleJoinIdPass = () => {
    setViewDetails((prev) => !prev);
  };

  const handleJoinTournament = async (playerName) => {
    try {
      const res = await axios.put(
        `https://backend-1-otqg.onrender.com/api/join-tournament/${data2?._id}`,
        { playerName }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAlreadyJoined(true);
        setShowPlayerIdName(false);
        dispatch(updateUserPrice(res.data.updatedUser));
        localStorage.setItem(
          "updatedUser",
          JSON.stringify(res.data.updatedUser)
        );
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error joining tournament. Please try again later.");
    }
  };

  const adminViewDetailsIdPass = async () => {
    if (currentUser.data.role === 1) {
      setViewDetailsAdmin(true);
    }
  };

  useEffect(() => {
    adminViewDetailsIdPass();
  }, []);

  return (
    <>
      {showPlayerIdName && (
        <PlayerIdName
          onClose={() => setShowPlayerIdName(false)}
          onJoin={handleJoinTournament}
        />
      )}
      <div className="w-[340px] h-[340px] bg-blue-950 rounded-lg text-white font-bold">
        <div>
          <h1 className="text-center">FREE FIRE MAX</h1>
          <div className="flex items-center justify-between mt-3 p-3 bg-yellow-400 text-black rounded-xl">
            <div className="border-r-2 pr-2">
              <h1>Date</h1>
              <h1 className="mt-1">{data2?.date}</h1>
            </div>
            <div className="border-r-2 pr-2">
              <h1>Time</h1>
              <div className="flex items-center">
                <h1 className="mt-1">{data2?.time}</h1>
                <h1 className="mt-1 ml-1">{data2?.amPm}</h1>
              </div>
            </div>
            <div className="pr-2">
              <h1>Map</h1>
              <h1 className="mt-1">{data2?.map}</h1>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 p-3 rounded-xl">
            <div className="border-r-2 pr-2">
              <h1>Prize pool</h1>
              <h1 className="mt-1">₹ {data2?.prizePool}</h1>
            </div>
            <div className="border-r-2 pr-2">
              <h1>Per Kill</h1>
              <h1 className="mt-1">₹ {data2?.perKill}</h1>
            </div>
            <div className="pr-2">
              <h1>Join using</h1>
              <h1 className="mt-1">₹ {data2?.joinCoins}</h1>
            </div>
          </div>

          <div className="p-2">
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-yellow-400 h-full rounded-full"
                style={{ width: `${joinedPercentage}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-[0.6rem]">
                {data2?.leftPlayers} players left
              </h1>
              <h1 className="text-[0.6rem]">
                {data2?.totalPlayers} total players
              </h1>
            </div>
          </div>

          <div className="text-center mt-2 flex items-center justify-around">
            <button
              onClick={handleOnJoinClick}
              className={`p-2 w-[50%] rounded-lg ${
                alreadyJoined
                  ? "bg-gray-500"
                  : "hover:bg-yellow-300 bg-yellow-500"
              }`}
              disabled={alreadyJoined}
            >
              {alreadyJoined ? "Already joined" : "Join now"}
            </button>
            {alreadyJoined ? (
              <button
                onClick={handleJoinIdPass}
                className="rounded-lg bg-red-500 text-[0.6rem] p-3 hover:bg-red-400"
              >
                view details(id & password)
              </button>
            ) : (
              ""
            )}

            {/* for admin */}
            {viewDetailsAdmin ? (
              <button
                onClick={handleJoinIdPass}
                className="rounded-lg bg-red-500 text-[0.6rem] p-3 hover:bg-red-400"
              >
                view details(id & password)
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {viewDetails && <RoomId setViewDetails={setViewDetails} data2={data2} />}
    </>
  );
}
