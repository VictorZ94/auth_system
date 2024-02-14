import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import login from "../actions/auth";

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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <div className="container mt-5">
      <h1>Sing in</h1>
      <p>Sign into your Account</p>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Don't have an account <Link to={"/signup"}>Sign up</Link>
      </p>
      <p className="mt-3">
        Forgot your password <Link to={"/reset-password"}>Reset password</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
