/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import RedeemIcon from '@mui/icons-material/Redeem';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Sidebar({ isMenuVisible }) {
  return (
    <aside
      className={`fixed top-[70px] left-0 w-[260px] h-screen bg-[#0a2351] border-t-2 text-white flex-col transition-transform transform ${
        isMenuVisible ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50`}
    >
      <div className="p-4">
        <h2 className="text-center font-bold">𝕲𝖆𝖒𝖊𝖔𝖓</h2>
      </div>
      <nav className="flex-grow text-center py-4">
        <ul className="">
          <li>
            <Link to="/home" className="flex items-center justify-center py-2 px-4 text-white font-bold hover:bg-gray-700">
            <HomeIcon/>
              Home 
            </Link>
          </li>
          <li className="mt-4">
            <Link to={"/login"}  className="flex items-center justify-center py-2 px-4 text-white font-bold hover:bg-gray-700">
            <RedeemIcon className="mr-2"/>
            Redeem Coin
            </Link>
          </li>
         
          <li className="mt-4">
            <a href="#contact" className="flex items-center justify-center text-white font-bold py-2 px-4 hover:bg-gray-700">
             <ContactMailIcon className="mr-2"/>
             Contact us
            </a>
          </li>
        </ul>
      </nav>

    </aside>
  );
}
