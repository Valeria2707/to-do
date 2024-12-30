import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-white dark:bg-black text-black dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}
