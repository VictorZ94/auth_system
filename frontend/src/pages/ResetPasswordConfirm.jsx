import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { reset_password_confirm } from "../actions/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { MdLockReset } from "react-icons/md";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
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

  // return (
  //   <div className="container mt-5">
  //     <h1>Request password resets</h1>
  //     <form onSubmit={handleOnSubmit}>
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           type="password"
  //           placeholder="New password"
  //           name="new_password"
  //           value={new_password}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
  //       <div className="form-group">
  //         <input
  //           className="form-control"
  //           type="password"
  //           placeholder="Confim new password"
  //           name="re_new_password"
  //           value={re_new_password}
  //           onChange={handleOnChange}
  //           required
  //         />
  //       </div>
  //       <button className="btn btn-primary">Reset password</button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="mt-14">
      <h1 className="font-bold text-5xl mb-10 flex justify-center">
        Request password resets
        <MdLockReset className="ml-3" />
      </h1>
      <div className="mt-14 mx-auto max-w-md mb-5">
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={handleOnSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="New password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="************"
              autoComplete="off"
              onChange={handleOnChange}
              name="re_new_password"
              value={re_new_password}
              required
            />
            <div className="my-2 block">
              <Label htmlFor="password" value="Confirm new password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="************"
              autoComplete="off"
              onChange={handleOnChange}
              name="re_new_password"
              value={re_new_password}
              required
            />
          </div>

          <Button type="submit" className="my-5">
            Reset password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
