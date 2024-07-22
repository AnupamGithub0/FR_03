import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstDotComPage from "./pages/FirstDotComPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TournamentsMode from "./components/TournamentsMode";
import Dashboard from "./components/Dashboard";
import PrivateAdmin from "./components/privateAdminorUser/PrivateAdmin";
import AdminDashboard from "./components/privateAdminorUser/AdminDashboard";
import PrivateUser from "./components/privateAdminorUser/PrivateUser";
import CreateTournment from "./components/AdminPannel/CreateTournment";
import TotalUserAdmin from "./components/AdminPannel/TotalUserAdmin";
import FindTournamentAdmin from "./components/AdminPannel/FindTournamentAdmin";
import Mycontest from "./components/solomode/Mycontest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstDotComPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/tournaments" element={<TournamentsMode />}></Route>
        <Route path="/my-contest" element={<Mycontest />}></Route>


        <Route path="/dashboard" element={<PrivateAdmin />}>
          <Route path="admin" element={<AdminDashboard />}></Route>
          <Route path="admin/create-tournament" element={<CreateTournment />}></Route>
          <Route path="admin/tournament" element={<FindTournamentAdmin />}></Route>
          <Route path="admin/users" element={<TotalUserAdmin />}></Route>
        </Route>

        <Route path="/dashboard" element={<PrivateUser />}>
          <Route path="user" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
