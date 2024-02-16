import { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Toast } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountcreated] = useState(false);
  const [matchedPassword, setMatchedPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const navigate = useNavigate();

  const { name, email, password, re_password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (matchedPassword) {
    setTimeout(() => {
      setMatchedPassword(!matchedPassword);
    }, [3000]);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountcreated(true);
      return;
    }
    setMatchedPassword(true);
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  if (accountCreated) {
    return navigate("/login");
  }

  const notify = () =>
    toast.success("Account created successfully, check your email");

  // return (
  //   <div>
  //     <h1>Signup</h1>
  //     <form onSubmit={handleOnSubmit}>
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           placeholder="name"
  //           name="name"
  //           value={name}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
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
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           type="password"
  //           placeholder="confirm password"
  //           name="re_password"
  //           value={re_password}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
  //       {matchedPassword && (
  //         <div className="alert alert-danger" role="alert">
  //           <span className="font-medium">Error! </span>
  //           {"Password don't match"}
  //         </div>
  //       )}
  //       <button className="btn btn-primary">Sign up</button>
  //     </form>
  //     <p className="mt-3">
  //       Already have an account <Link to={"/login"}>Sign In</Link>
  //     </p>
  //     {accountCreated && (
  //       <div className="alert mt-1 alert-success">
  //         <span className="font-medium">Success account created!</span> review
  //         your email
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="px-4 mt-14 mx-auto max-w-md mb-5">
      <h1 className="font-bold text-5xl flex-row md:flex md:justify-center">
        <FaUser className="mr-3" />
        Sing Up
      </h1>
      <p className="my-10 text-center text-lg">Please create your account</p>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleOnSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={handleOnChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="email@appsystem.com"
            name="email"
            value={email}
            onChange={handleOnChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            placeholder="*************"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Confirm password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="re_password"
            placeholder="*************"
            value={re_password}
            onChange={handleOnChange}
            required
          />
        </div>
        {matchedPassword && (
          <div className="alert alert-danger" role="alert">
            <span className="font-medium">Error! </span>
            {"Password don't match"}
          </div>
        )}
        <Button type="submit" className="my-5">
          Submit
        </Button>
      </form>
      <p className="mt-3 text-sm">
        Already have an account{" "}
        <Link to={"/login"} className="text-cyan-500">
          Sign In
        </Link>
      </p>
      {accountCreated && (
        <div className="alert mt-1 alert-success">
          <span className="font-medium">Success account created!</span> review
          your email
        </div>
      )}
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer position="bottom-right" draggable />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
