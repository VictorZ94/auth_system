import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import { activate } from "../actions/auth";

const Activate = ({ activate }) => {
  const { uid, token } = useParams();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    activate(uid, token);
  };

  return (
    <div className="mt-14 mx-auto max-w-md mb-5 text-center">
      <h1 className="font-bold text-4xl flex justify-center">
        <FaCheckCircle className="mr-3" />
        Activate your account
      </h1>
      <p className="my-10">Please activate your Account</p>
      <form onSubmit={handleOnSubmit} className="flex justify-center">
        <Button size={"xl"}>ACTIVATE</Button>
      </form>
    </div>
  );
};

export default connect(null, { activate })(Activate);
