import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import { useEffect } from "react";

const Logout = ({ logout }) => {
  const navigate = useNavigate();
  logout();

  useEffect(() => {
    return navigate("/");
  }, []);
};

export default connect(null, { logout })(Logout);
