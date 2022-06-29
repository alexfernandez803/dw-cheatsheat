import React, { useState } from "react";
import { useFormFields } from "../../libs/hooksLib";
import LoaderButton from "../../components/Button/LoaderButton";
import Input from "../../components/Text/Input";
import { Auth } from "aws-amplify";
import Alert from "../../components/Alert";
import { useAppContext } from "../../libs/contextLib";
import { Link } from "react-router-dom";
function Signup({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [newuser, setNewUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [message, setMessage] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [fields, setFields] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const isFormValid = () => {
    return fields.email.length > 0 && fields.password.length > 0 && fields.password === fields.confirmPassword;
  };

  const isConfirmationCodeVzalid = () => {
    return fields.confirmationCode.length > 0;
  };

  const handleCreateAccount = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });
      console.log(newUser);
      setNewUser(newUser);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setMessage(e.message);
      setNewUser(null);
      setIsError(true);
    }
  };

  const handleVerfiyAccount = async (evt) => {
    evt.preventDefault();
    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
    } catch (e) {
      setMessage(e.message);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const onFocus = (evt) => {
    evt.preventDefault();
    if (isError) {
      setMessage(null)
      setIsError(false)
    }
}

  const renderSignup = () => {
    return (
      <form className="mt-8 space-y-6" onSubmit={handleCreateAccount} autoComplete="off">
        <Input placeholder="Email" label="Email" type="email" name="email" onChange={setFields} 
        value={fields.email}
        onFocus={onFocus} />
        <Input
          placeholder="Password"
          label="Password"
          type="password"
          name="password"
          onChange={setFields}
          value={fields.password}
          onFocus={onFocus} 
        />
        <Input
          placeholder="Confirm Password"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={setFields}
          value={fields.confirmPassword}
          onFocus={onFocus} 
        />
        <div className="mt-4">
          <LoaderButton disabled={!isFormValid()} isLoading={isLoading} type="submit">
            Create Account
          </LoaderButton>
        </div>
        <div className="mt-4">
        <p>
          Have an account?  
        
        <Link
        
              to="/login"
              className="ml-2 font-medium text-indigo-600 hover:text-indigo-400"
            >
            Login here
            </Link>
            </p>
        </div>
      </form>
    );
  };
  const renderConfirm = () => {
    return (
      <form onSubmit={handleVerfiyAccount}>
        <Input
          placeholder="Confirmation Code, check your email(verificationemail.com)."
          label="Confirmation Code"
          type="text"
          name="confirmationCode"
          onChange={setFields}
          value={fields.confirmationCode}
        />
        <div className="mt-4">
          <LoaderButton disabled={!isConfirmationCodeVzalid()} isLoading={isLoading} type="submit">
            Verify
          </LoaderButton>
        </div>
      </form>
    );
  };

  const onHandleClose = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-2">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            {newuser == null ? "Create Account" : "Account Confrimation"}
          </h2>
        </div>
        {isError && (
          <Alert type={isError ? "error" : "success"} onHandleClose={onHandleClose}>
            {message}
          </Alert>
        )}
        {newuser == null ? renderSignup() : renderConfirm()}
      </div>
    </div>
  );
}

export default Signup;
