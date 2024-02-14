import { useState } from "react";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
  };

  return (
    <div className="container mt-5">
      <h1>Request password resets</h1>
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
        <button className="btn btn-primary">Reset password</button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
