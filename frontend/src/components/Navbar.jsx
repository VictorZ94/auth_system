import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Button, DarkThemeToggle, Navbar as NavbarFlow } from "flowbite-react";

const Navbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-lg block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700"
              : "text-lg block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-md"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "text-lg block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700"
              : " text-lg block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-md"
          }
        >
          Sing up
        </NavLink>
      </li>
    </>
  );

  const authLinks = () => (
    <li>
      <a
        href="#!"
        className="text-lg block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-md"
      >
        Logout
      </a>
    </li>
  );

  return (
    <NavbarFlow fluid rounded className="bg-gray-50">
      <NavbarFlow.Brand href="#">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Auth System
        </span>
      </NavbarFlow.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarFlow.Toggle />
      </div>
      <NavbarFlow.Collapse>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg block py-2 pr-4 pl-3 md:p-0 bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700"
                : "text-lg block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated ? authLinks() : guestLinks()}
      </NavbarFlow.Collapse>
    </NavbarFlow>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
