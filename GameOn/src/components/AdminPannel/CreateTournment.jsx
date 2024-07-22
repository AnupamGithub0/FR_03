import AdminDashboard from "../privateAdminorUser/AdminDashboard";
import CreateTournamentForm from "./CreateTournamentForm";

export default function CreateTournment() {
  return (
    <>
        <AdminDashboard/>
      <div className="flex items-center justify-center">
        <div className="p-7 md:ml-auto border-2 md:w-[82%] sm:w-full ">
          <CreateTournamentForm/>
        </div>
      </div>
    </>
  )
}
