import { connect } from "react-redux";
import { verify } from "../actions/auth";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const handleOnSubmit = () => {
    verify(uid, token);
    setVerified(true);
  };

  return (
    <div className="container mt-5">
      <h1>Sing in</h1>
      <p>Sign into your Account</p>
      <form onSubmit={handleOnSubmit}>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default connect(null, { verify })(Activate);
