import { toast } from "react-hot-toast";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function UserList() {
  const [users,setUsers] = useState([])
  const [total,setTotal] = useState(null)


  const fetchTotalUser = async ()=>{
    try {
      const res = await axios.get(`https://backend-1-otqg.onrender.com/api/find-all-user`)
        setUsers(res?.data?.data)
        setTotal(res?.data?.total)
      
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  useEffect(()=>{
    fetchTotalUser()
  },[])


  return (
    <div className="flex items-center justify-center bg-gray-100 p-2">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-3 text-center"><span>{total} USERS YOU HAVE</span></h2>
        <div className="">
          <table className=" bg-white border border-gray-200">
            <thead>
              <tr>
                {/* <th className="px-3 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th> */}
                <th className="px-3 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-3 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-3 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user} className="">
                  {/* <td className="px-3 py-4 border-b border-gray-200 text-sm">{user._id}</td> */}
                  <td className="px-3  border-b border-gray-200 text-sm">{user.userName}</td>
                  <td className="px-3  border-b border-gray-200 text-sm">{user.email}</td>
                  <td className="ml-2 border-b border-gray-200 text-sm">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
