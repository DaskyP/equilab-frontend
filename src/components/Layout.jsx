import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
<div className="flex h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100">
  <Sidebar />

  <div className="flex-1 p-8 overflow-hidden">
    <div className="h-full w-full bg-[#FBFAF4] rounded-3xl shadow-md p-6 flex flex-col">
      <Outlet />
    </div>
  </div>
</div>

  );
};

export default Layout;
