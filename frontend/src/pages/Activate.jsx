import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import { activateAccount } from "../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const Activate = ({ activateAccount }) => {
  const [accountActivated, setAccountActivated] = useState(false);
  const { uid, token } = useParams();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("enter into activate");
    activateAccount(uid, token);
    setAccountActivated(true);
  };

  useEffect(() => {
    if (accountActivated) {
      toast.success("Account activated successfully!");
    }
  }, [accountActivated]);

  return (
    <div className="mt-14 mx-auto max-w-md mb-5 text-center">
      <h1 className="font-bold text-4xl flex justify-center">
        <FaCheckCircle className="mr-3" />
        Activate your account
      </h1>
      <p className="my-10">Please activate your Account</p>
      <form onSubmit={handleOnSubmit} className="flex justify-center">
        <Button type="submit" size={"xl"}>
          ACTIVATE
        </Button>
      </form>
      <div>
        <ToastContainer position="bottom-right" draggable />
      </div>
    </div>
  );
};

export default connect(null, { activateAccount })(Activate);
