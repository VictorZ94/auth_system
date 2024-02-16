import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import login from "../actions/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { IoEnter } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  // const notify = () => toast.error("Error logged!");

  if (isAuthenticated) {
    return navigate("/");
  }

  // return (
  //   <div className="container mt-5">
  //     <h1>Sing in</h1>
  //     <p>Sign into your Account</p>
  //     <form onSubmit={handleOnSubmit}>
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           type="email"
  //           placeholder="email"
  //           name="email"
  //           value={email}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           type="password"
  //           placeholder="password"
  //           name="password"
  //           value={password}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
  //       <button className="btn btn-primary">Login</button>
  //     </form>
  //     <p className="mt-3">
  //       Don't have an account <Link to={"/signup"}>Sign up</Link>
  //     </p>
  //     <p className="mt-3">
  //       Forgot your password <Link to={"/reset-password"}>Reset password</Link>
  //     </p>
  //   </div>
  // );

  return (
    <div className="mt-14 mx-auto max-w-md mb-5">
      <h1 className="font-bold text-5xl flex justify-center">
        <IoEnter className="mr-3" />
        Sing in
      </h1>
      <p className="my-10 text-center text-lg">Sign into your account</p>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleOnSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="email@appsystem.com"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
            placeholder="*************"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>
        <Button type="submit" className="my-5">
          Submit
        </Button>
      </form>
      <p className="mt-3 text-sm">
        Don't have an account{" "}
        <Link to={"/signup"} className="text-cyan-500">
          Sign up
        </Link>
      </p>
      <p className="mt-3 text-sm">
        Forgot your password{" "}
        <Link to={"/reset-password"} className="text-cyan-500">
          Reset password
        </Link>
      </p>
      <div>
        <ToastContainer position="bottom-right" draggable />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
