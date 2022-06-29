import React, { useState } from "react";
import { useFormFields } from "../../libs/hooksLib";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import LoaderButton from "../../components/Button/LoaderButton";
import Input from "../../components/Text/Input";
import Alert from "../../components/Alert";
function ForgotPassword() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const [fields, setFields] = useFormFields({
    email: "",
    code: "",
    password: "",
  });


  const onSubmitSendCode = async (evt) => {
    evt.preventDefault();
    setIsSendingCode(true);
    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
      setIsError(false);
      setIsSendingCode(false);
    } catch (exception) {
      setIsSendingCode(false);
      setCodeSent(false);
      setMessage(exception.message);
      setIsError(true);
    }
  };

  const onSubmitConfirm = async (evt) => {
    evt.preventDefault();
    setIsConfirming(true);
    try {
      await Auth.forgotPasswordSubmit(fields.email, fields.code, fields.password);
      setConfirmed(true);
      setIsError(false);
      setIsConfirming(false)
    } catch (ex) {
      setMessage(ex.message);
      setIsError(true);
      setIsConfirming(false)
    }
  };

  const isValidEmail = () => {
    return fields.email.length > 0;
  };
  const isValidCode = () => {
    return fields.code.length > 0 && fields.password.length > 0;
  };


  const onHandleClose = () => {
    setMessage(null);
  };

  const onFocus = (evt) => {
    evt.preventDefault();
    if (isError) {
      setMessage(null)
      setIsError(false)
    }
}

  
  const renderRequestCodeForm = () => {
    return (
      <>
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Enter your email</h2>
        </div>
        {message && (
          <Alert type={isError ? "error" : "success"} onHandleClose={onHandleClose}>
            {message}{" "}
          </Alert>
        )}
        <form className="mt-8 space-y-6" onSubmit={onSubmitSendCode}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                required
                placeholder="Email address"
                value={fields.email}
                onChange={setFields}
                onFocus={onFocus}
              />
            </div>
          </div>
          <div>
            <LoaderButton type="submit" isLoading={isSendingCode} disabled={!isValidEmail()}>
              Reset Password
            </LoaderButton>
            <p className="mt-2 text-sm text-center text-gray-600">
            Got a password?
              <Link to="/login" className="pl-2 font-medium text-indigo-600 hover:text-indigo-500">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </>
    );
  };

  const renderConfirmationForm = () => {
    return (
      <>
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Confirmation</h2>
        </div>
        {message && (
          <Alert type={isError ? "error" : "success"} onHandleClose={onHandleClose}>
            {message}{" "}
          </Alert>
        )}
        <form className="mt-8 space-y-6" onSubmit={onSubmitConfirm}>
          <Input
            placeholder="Confirmation Code"
            label="Confirmation Code"
            type="text"
            name="code"
            id="code"
            onChange={setFields}
            value={fields.code}
          />
          <Input
            placeholder="Password"
            label="Password"
            type="password"
            name="password"
            id="password"
            onChange={setFields}
            value={fields.password}
          />
          <div>
            <LoaderButton type="submit" isLoading={isConfirming} disabled={!isValidCode()}>
              Reset Password
            </LoaderButton>
            <p className="mt-2 text-sm text-center text-gray-600">
              <Link to="/login" className="pl-2 font-medium text-indigo-600 hover:text-indigo-500">
                Got a password?
              </Link>
            </p>
          </div>
        </form>
      </>
    );
  };

  const renderSuccessMessage = () => {
    return (
      <div className="Success">
        <p>Your password has been reset.</p>
        <p>
          Click{" "}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            here
          </Link>{" "}
          to login with your new credentials
        </p>
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-2">
          {!codeSent ? renderRequestCodeForm() : !confirmed ? renderConfirmationForm() : renderSuccessMessage()}
        </div>{" "}
      </div>
    </div>
  );
}

export default ForgotPassword;
