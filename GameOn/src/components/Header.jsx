/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Slidebar";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Header({ data2 }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { updateuserCoin } = useSelector((state) => state.user);

  const handleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Determine which coins value to display
  // const coins = updateuserCoin?.coins || currentUser.data?.coins || "";
  const coins = updateuserCoin?.coins || (currentUser && currentUser.data && currentUser.data.coins) || "";

 

  return (
    <div className="fixed w-screen p-4 sm:p-4 text-white bg-[#0a2351]">
      <div className="flex items-center justify-around sm:justify-between">
        <div className="flex items-center">
          <div className="menu md:hidden sm:block">
            <button onClick={handleMenu}>
              <MenuIcon className="cursor-pointer" />
            </button>
          </div>
          <h1 className="md:text-3xl sm:text-[1.1rem] mr-6 ml-4">𝕲𝖆𝖒𝖊𝖔𝖓</h1>
        </div>

        <div className="flex items-center font-bold">
          <div className="mr-10">
            <span className="md:text-sm border-2  rounded-full font-bold text-2xl sm:text-sm sm:p-2 w-[80px]">
              <AccountBalanceWalletIcon/>
            <span>₹ {coins}</span>
            </span>
           
          </div>
          

          <div className="mr-4 flex items-center">
            <SportsEsportsIcon />
            <div className="relative inline-block">
              <button
                onClick={handleDropdown}
                className="sm:w-[140px] bg-blue-500 text-white rounded-lg"
              >
                {currentUser?.data?.userName || "Guest"}
                <ArrowDropDownIcon />
              </button>

              <div
                id="dropdownHover"
                className={`absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${
                  isDropdownVisible ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link
                      to={`/dashboard/${
                        currentUser?.data?.role === 1 ? "admin" : "user"
                      }`}
                      className="font-bold px-4 block hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {currentUser?.data?.role === 1 ? "Admin" : "My Profile"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/setting"
                      className="block px-4 mt-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isMenuVisible={isMenuVisible}/>
    </div>
  );
}
