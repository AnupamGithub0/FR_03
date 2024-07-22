/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "../components/Slidebar";
import MainContent from "./MainContent";
import { Toaster } from "react-hot-toast";

export default function Container({ children }) {
  return (
    <div className="">
      <Toaster/>
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <main className="p-4 md:ml-64">
          <MainContent />
          {children}
        </main>
      </div>
    </div>
  );
}
