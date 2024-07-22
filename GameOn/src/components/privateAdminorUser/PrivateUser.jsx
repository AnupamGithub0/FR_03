import { useEffect, useState } from "react"
import axios from 'axios'
import {Outlet} from 'react-router-dom'
import Spinner from "../Spinner"
export default function PrivateUser() {
    const [ok,setOk] = useState(false)

    useEffect(()=>{
        axios.defaults.withCredentials = true
        const fetchData = async()=>{
            const res = await axios.get(`https://backend-1-otqg.onrender.com/api/getUser`)
            if (res.data.success === true) {
                setOk(true)
            }
            else{
                setOk(false) 
            }
        }
        fetchData()
        

    },[])
  return (
    <>
    {
        ok ? (<Outlet/>) : (<Spinner/>)
    }
      
    </>
  )
}
