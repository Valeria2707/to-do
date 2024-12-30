import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 shadow-md flex flex-col justify-between">
      <nav>
        <ul className="space-y-6">
          <li>
            <Link
              to="/"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300 hover:underline transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300 hover:underline transition-all"
            >
              Create a new task
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </div>
  );
}
