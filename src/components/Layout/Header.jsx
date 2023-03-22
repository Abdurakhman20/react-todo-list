import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" pb-5  border-b-2 ">
      <div className="container pt-5 flex items-center justify-between">
        <Link to="/home">
          <img className="w-12 " src="images/logo.png" alt="logo" />
        </Link>
        <ul className=" flex gap-12 text-blue-500 text-xl ">
          <li>
            <NavLink
              className="hover:text-blue-800 transition-colors ease-in-out delay-100 "
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-blue-800 transition-colors ease-in-out delay-100 "
              to="/all-todos"
            >
              All Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-blue-800 transition-colors ease-in-out delay-100 "
              to="/active-todos"
            >
              Active Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-blue-800 transition-colors ease-in-out delay-100 "
              to="/completed-todos"
            >
              Completed Todos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
