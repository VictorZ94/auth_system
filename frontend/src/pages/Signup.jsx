import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleOnChange}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="confirm password"
            name="re_password"
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
        <button className="btn btn-primary">Sign up</button>
      </form>
      <p className="mt-3">
        Already have an account <Link to={"/login"}>Sign In</Link>
      </p>
      {accountCreated && (
        <div className="alert mt-1 alert-success">
          <span className="font-medium">Success account created!</span> review
          your email
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
