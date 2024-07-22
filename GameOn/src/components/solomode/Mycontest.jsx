/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SoloMycontest from "./SoloMycontest";
import axios from "axios";
import Container from "../Container";
// import PlayerIdName from "./PlayerIdName";

export default function Mycontest() {
  const [foundTournaments,setFoundTournaments] = useState([])
  
  axios.defaults.withCredentials = true
  const handleFindTournaments = async() => {
    const res = await axios.get(`https://backend-1-otqg.onrender.com/api/my-contest`);
    setFoundTournaments(res.data?.data)
  };

  useEffect(() => {
    handleFindTournaments();
  }, []);
  return (
    <Container>
    <div className="flex flex-wrap gap-5 mt-3 justify-center">
     
     <div className="flex flex-wrap gap-5 justify-center">
      {
        foundTournaments?.map((el)=>{
          return (<SoloMycontest data2={el} />)          
        })
      }
    </div>
    </div>
    </Container>
  );
}
