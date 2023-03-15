import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img className="w-12 " src="images/logo.png" alt="logo" />
      <ul className=" flex gap-12 text-blue-500 text-xl transition-colors ease-in-out delay-1000 ">
        <li>
          <NavLink className="hover:text-blue-800" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" to="/all-todos">
            All Todos
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" to="/active-todos">
            Active Todos
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" to="/completed-todos">
            Completed Todos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
