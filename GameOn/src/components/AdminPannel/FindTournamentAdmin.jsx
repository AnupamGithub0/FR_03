import { useEffect, useState } from "react";
import AdminDashboard from "../privateAdminorUser/AdminDashboard";
import axios from "axios";
import Solo from "../solomode/Solo";

export default function FindTournamentAdmin() {
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
    <>
      <div>
        <AdminDashboard />
      </div>
      <div className="p-7 md:ml-auto border-2 md:w-[82%] sm:w-full">
     <div className="flex items-center justify-center gap-5 flex-wrap">
     {
        foundTournaments?.map((el)=>{
          return (<Solo key={el._id} data2={el}/>)          
        })
      }
     </div>
      </div>
    </>
  );
}
