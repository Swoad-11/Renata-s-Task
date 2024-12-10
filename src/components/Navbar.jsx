import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-20 top-0 start-0 h-16 border-b border-gray-600">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700"
              >
                Task-1
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700"
              >
                Task-2
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
