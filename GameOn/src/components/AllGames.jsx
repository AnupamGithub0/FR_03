import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";
export default function AllGames() {
  return (
    <div className="p-2">
      <div className="flex items-center">
        <SportsEsportsIcon fontSize="large" />
        <h1 className="font-bold text-gray-600 ml-2">ALL GAMES</h1>
      </div>
      <div className="p-6 h-screen ">

        <div className="flex items-center flex-wrap justify-center gap-3">
          <div className="sm:w-[250px] md:w-[400px] text-center  p-4 rounded-md h-[286px] md:h-[330px] bg-blue-950">
            <h1 className="text-yellow-400 p-2 font-bold text-3xl text-center">
              FREE FIRE MAX
            </h1>
            <img src="https://wallpapers.com/images/high/free-fire-hip-hop-clothing-hvcboo530zgqmrtk.webp" alt="" />
            <Link to={"/home/tournaments"} className="mt-7 bg-yellow-400 hover:bg-yellow-200 p-2 font-bold text-center">PLAY YOUR GAME</Link>
          </div>
          <div className="sm:w-[250px] md:w-[400px] p-4 rounded-md h-[286px] md:h-[330px] bg-blue-950">
            <h1 className="text-yellow-400 p-2 font-bold text-3xl text-center">
              BGMI
            </h1>
            <img src="https://wallpapers.com/images/high/bgmi-1920-x-1080-background-t0bwott9ptujsrgi.webp" alt="" />
            <h1 className="bg-yellow-400 mt-1 p-2 font-bold text-center">PLAY YOUR GAME</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
