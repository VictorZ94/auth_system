import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = ({ reset_password }) => {
  const [resetSend, setResetSend] = useState(false);
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
    setResetSend(true);
  };

  useEffect(() => {
    if (resetSend) {
      toast.success("Check your email to reset password!");
    }
  }, [resetSend]);

  return (
    <div className="mt-14 mx-auto max-w-md mb-5">
      <h1 className="font-bold text-5xl mb-10 flex justify-center">
        Reset password
      </h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleOnSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="email@appsystem.com"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleOnChange}
            required
          />
        </div>

        <Button type="submit" className="my-5">
          Reset password
        </Button>
      </form>
      <div>
        <ToastContainer position="bottom-right" draggable />
      </div>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
