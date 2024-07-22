/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Solo from "./solomode/Solo";
import axios from "axios";

export default function SoloMode() {
  const [foundTournaments,setFoundTournaments] = useState([])
  
  axios.defaults.withCredentials = true
  const handleFindTournaments = async() => {
    const res = await axios.get(`https://backend-1-otqg.onrender.com/api/tourments-find`);
    setFoundTournaments(res.data?.data)
  };

  useEffect(() => {
    handleFindTournaments();
  }, []);
  return (
    <div className="flex flex-wrap gap-5 justify-center">
     
     <div className="flex flex-wrap gap-5 justify-center">
      {
        foundTournaments?.map((el)=>{
          return (<Solo key={el._id} data2={el} />)          
        })
      }
    </div>
    </div>
  );
}
