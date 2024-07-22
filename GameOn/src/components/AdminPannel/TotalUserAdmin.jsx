import AdminDashboard from "../privateAdminorUser/AdminDashboard";
import UserList from "./CreateUserList";

export default function TotalUserAdmin() {
  return (
    <>
      <div className="">
        <AdminDashboard />
      </div>
      <div className="flex items-center justify-center">
        <div className="p-7 md:ml-auto border-2 md:w-[82%] sm:w-full ">
          <UserList/>
        </div>
      </div>
    </>
  );
}
