import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useFormFields } from "../../libs/hooksLib";
import Input from "../../components/Text/Input";
import LoaderButton from "../../components/Button/LoaderButton";
import Alert from "../../components/Alert";
function ChangePassword() {
  const [isChanging, setIsChanging] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);

  const [fields, setFields] = useFormFields({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsChanging(true);

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, fields.oldPassword, fields.newPassword);
      setMessage("Change Password is successful. Logging out now");
      //Change this late
      setIsError(false);
      setIsChanging(false);
    } catch (exception) {
      setIsChanging(false);
      setMessage(exception.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    const logout = async () => {
      await Auth.signOut();
    };

    if (isError === false && message !== null) {
      const timer = setTimeout(() => {
        logout();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isError, message]);

  const isValidForm = () => {
    return (
      fields.oldPassword.length > 0 && fields.newPassword.length > 0 && fields.confirmPassword === fields.newPassword
    );
  };

  const onHandleClose = () => {
    setMessage(null);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-full max-w-md px-8 pb-8 m-auto bg-white rounded shadow-lg ">
        <div className="px-1">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Change Password</h2>
        </div>
        {message && (
          <Alert type={isError ? "error" : "success"} onHandleClose={onHandleClose}>
            {message}{" "}
          </Alert>
        )}
        <form className="mt-4 space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <Input
            placeholder="Old Password"
            label="Old Password"
            type="password"
            name="oldPassword"
            onChange={setFields}
            value={fields.oldPassword}
          />
          <Input
            placeholder="New Password"
            label="New Password"
            type="password"
            name="newPassword"
            onChange={setFields}
            value={fields.newPassword}
          />
          <Input
            placeholder="Confirm Password"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={setFields}
            value={fields.confirmPassword}
          />
          <div>
            <LoaderButton isLoading={isChanging} disabled={!isValidForm()}>
              Change Password
            </LoaderButton>
            <Link
              to="/dashboard"
              className="relative flex justify-center w-full px-2 py-2 mt-2 text-sm font-medium border border-gray-200 rounded-md group hover:bg-indigo-100 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-100"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
