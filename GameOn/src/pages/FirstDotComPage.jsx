import { Link } from "react-router-dom";
import first from "../assert/ff01.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Toaster } from 'react-hot-toast';


export default function FirstDotComPage() {
  return (
   
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
       <Toaster/>
      <div className=" flex items-center justify-center min-h-screen">
        <div className="relative text-center">
          <img
            src={first}
            alt="Placeholder Image"
            className="xl:filter xl:blur-sm  sm:w-screen h-screen rounded-lg shadow-lg w-screen  filter blur-sm"
          />
          <div className="absolute top-0 left-0 flex-col w-full text-2xl font-bold  h-screen flex items-center justify-center">
          <h1 className="text-white text-[2rem] lg:text-[5rem] mb-10">Play Esports tournaments.</h1>
            <Link to={"/login"} className="p-2 mt-5  bg-yellow-500 w-[150px] rounded-md">
            <AccountCircleIcon style={{ fontSize: 30 }} />
              Login
            </Link>
            
          </div>
        </div>
      </div>
     

    </div>
  );
}
