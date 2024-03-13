// @packages
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

// @redux
import { useDispatch, useSelector } from "react-redux";

// @actions
import { signup } from "../actions/auth";

const Signup = () => {
  const [accountCreated, setAccountcreated] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { isError, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispath = useDispatch();

  const navigate = useNavigate();

  const { name, email, password, re_password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsErrorPassword(false);

    if (password !== re_password) {
      setIsErrorPassword(true);
      return;
    }
    dispath(signup(name, email, password, re_password));
    if (!isError) setAccountcreated(true);
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  useEffect(() => {
    if (accountCreated) {
      toast.success("Account created successfully, check your email");
    }
  }, [accountCreated]);

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
        {isErrorPassword && (
          <div
            className="flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Danger alert!</span> <br></br>
              Password don't match
            </div>
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
      {isError && (
        <div
          className="flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> <br></br>
            {message}
          </div>
        </div>
      )}
      <div>
        <ToastContainer position="bottom-right" draggable />
      </div>
    </div>
  );
};

export default Signup;
