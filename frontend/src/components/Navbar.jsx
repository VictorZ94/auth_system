import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Button, Navbar as NavbarFlow } from "flowbite-react";

const Navbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="signup">
          Signup
        </Link>
      </li>
    </>
  );

  const authLinks = () => (
    <li className="nav-item">
      <a className="nav-link" href="#!" onClick={logout}>
        Logout
      </a>
    </li>
  );

  // return (
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //     <Link className="navbar-brand" href="">
  //       Auth System
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">
  //             Home <span className="sr-only">(current)</span>
  //           </Link>
  //         </li>
  //         {isAuthenticated ? authLinks() : guestLinks()}
  //       </ul>
  //     </div>
  //   </nav>
  // );
  return (
    <NavbarFlow fluid rounded className="bg-black">
      <NavbarFlow.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Auth System
        </span>
      </NavbarFlow.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarFlow.Toggle />
      </div>
      <NavbarFlow.Collapse>
        <NavbarFlow.Link href="#" active>
          Home
        </NavbarFlow.Link>
        <NavbarFlow.Link href="#">About</NavbarFlow.Link>
        <NavbarFlow.Link href="#">Services</NavbarFlow.Link>
        <NavbarFlow.Link href="#">Pricing</NavbarFlow.Link>
        <NavbarFlow.Link href="#">Contact</NavbarFlow.Link>
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Home
          </a>
        </li>
      </NavbarFlow.Collapse>
    </NavbarFlow>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
