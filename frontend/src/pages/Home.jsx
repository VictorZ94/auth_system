import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">Welcome to the auth system!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>Click to the Log In button</p>
      <Link className="btn btn-primary btn-lg" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Home;
