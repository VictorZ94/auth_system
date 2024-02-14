import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: ""
  });
  const { uid, token } = useParams(); 

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { new_password, re_new_password } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  return (
    <div className="container mt-5">
      <h1>Request password resets</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="New password"
            name="new_password"
            value={new_password}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Confim new password"
            name="re_new_password"
            value={re_new_password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className="btn btn-primary">Reset password</button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
