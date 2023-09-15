import React, { useState } from "react";
import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";


/*
This is our ForgotPassword component. It is a functional component that uses the useState hook to manage state.
*/ 

function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { userCred } = useAppContext();
  const navigate = useNavigate();


  /** 
   This function is called when the user clicks on the "Reset Password" button. 
  **/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== newPassword) {
      alert("Password and Confirm Password should be same");
    } else {
      const user = { user: userCred.user, password: newPassword };
      console.log(user);
      localStorage.setItem("password", newPassword);
      navigate("/login");
    }
  };

  const handleclick = () => {
    navigate("/login");
  };

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot Password
              </h1>
              <form className="space-y-4 md:space-y-6 [&>*]:w-full" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newpassword"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={newPassword}
                    id="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <p
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-white"
                    onClick={handleclick}
                  >
                    Back to Login
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
