/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export default function RoomId({ setViewDetails, data2 }) {
  const { currentUser } = useSelector((state) => state.user);
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const [roomData, setRoomData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const res = await axios.get(`https://backend-1-otqg.onrender.com/api/get-room-password`, {
          params: { tournamentsId: data2._id},
        });
        if (res.data.success) {
          setRoomData(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Error while fetching room ID and password");
      }
    };

    if (currentUser.data.role !== 1) {
      fetchRoomData();
    }
  }, [currentUser, data2._id]);

  const handleRoomIdAndPass = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://backend-1-otqg.onrender.com/api/create-room-password`, {
        tournamentsId: data2._id,
        roomId,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/home/tournaments")
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error while creating room ID and password");
    }
  };

  return (
    <div className="fixed w-full h-screen top-0 flex items-center justify-center bg-slate-900 bg-opacity-75">
      {currentUser?.data.role === 1 ? (
        <div className="fixed top-[20%] flex items-center justify-center">
          <div className="bg-white w-[300px] h-[360px] lg:w-[400px] sm:h-[320px] p-4 rounded shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Tournament Details</h2>
              <button onClick={() => setViewDetails(false)}>
                <CloseIcon />
              </button>
            </div>
            <form>
              <div className="mb-2">
                <label htmlFor="tournamentId" className="block text-sm font-medium text-gray-700">
                  Tournament ID for Admin
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    id="tournamentId"
                    className="mt-1 p-2 border-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ContentCopyIcon className="absolute top-2 right-0" />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="tournamentPassword" className="block text-sm font-medium text-gray-700">
                  Tournament Password for admin
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="tournamentPassword"
                  className="mt-1 border-2 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="text-center mt-3">
              <button onClick={handleRoomIdAndPass} className="p-2 hover:bg-orange-300 bg-orange-500 text-white rounded-full">Submit</button>

              </div>
            </form>
            <h1 className="mt-5 text-red-600 font-bold text-sm text-center">
              *Do not share this ID and password. You will receive the room ID and password 10 minutes before the match starts.
            </h1>
          </div>
        </div>
      ) : (
        <div className="fixed top-[20%] flex items-center justify-center">
          <div className="bg-white w-[300px] h-[310px] lg:w-[400px] sm:h-[320px] p-4 rounded shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Tournament Details</h2>
              <button onClick={() => setViewDetails(false)}>
                <CloseIcon />
              </button>
            </div>
            <form>
              <div className="mb-2">
                <label htmlFor="tournamentId" className="block text-sm font-medium text-gray-700">
                  Tournament ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    disabled
                    id="tournamentId"
                    value={roomData.roomId}
                    className="mt-1 p-2 border-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ContentCopyIcon className="absolute top-2 right-0" />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="tournamentPassword" className="block text-sm font-medium text-gray-700">
                  Tournament Password
                </label>
                <input
                  type="text"
                  disabled
                  value={roomData.password}
                  id="tournamentPassword"
                  className="mt-1 border-2 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </form>
            <h1 className="mt-5 text-red-600 font-bold text-sm text-center">
              *Do not share this ID and password. You will receive the room ID and password 10 minutes before the match starts.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
