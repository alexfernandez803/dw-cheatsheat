import React, { useState } from "react";
import { useFormFields } from "../../libs/hooksLib";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import LoaderButton from "../../components/Button/LoaderButton";
import Alert from "../../components/Alert";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [fields, setFields] = useFormFields({
    email: "",
    password: "",
    remember_me: false,
  });

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setIsLoading(true);
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      setMessage(e.message);
    }
  };

  const isValidForm = () => {
    return fields.email.length > 0 && fields.password.length;
  };

  const onHandleClose = () => {
    setMessage(null)
    setIsError(false)
    setIsLoading(false);
  }

  const onFocus = (evt) => {
      evt.preventDefault();
      if (isError) {
        setMessage(null)
        setIsError(false)
      }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-2">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or
            <Link to="/signup" className="pl-2 font-medium text-indigo-600 hover:text-indigo-500">
              Create an account
            </Link>
          </p>
        </div>
        {isError && <Alert type={isError ? "error" : "success"} onHandleClose={onHandleClose}>{message}</Alert>}
        <form className="mt-8 space-y-6" action="#" onSubmit={onSubmit} autoComplete="off">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={fields.email}
                onChange={setFields}
                onFocus={onFocus}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="nope"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={fields.password}
                onChange={setFields}
                onFocus={onFocus}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <LoaderButton
              disabled={!isValidForm()}
              isLoading={isLoading}
              type="submit"
             >
              Sign in
            </LoaderButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
