/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";


//This is our Navbar which is a functional component that uses the useState hook to manage state.
function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLoggedIn"));


/** 
 * This useEffect when the there is login which are changging the state of the isLogin.
 **/

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLoggedIn"));
  }, [isLogin]);


  const navigate = useNavigate();


/**
 * This handlelogout function is called when the user clicks on the "Logout" button.
 * it removes the item from the localstorage and navigate to the login page.
 * and seting the hook from the appcontext to false.
 * 
 * so that the user can not access the home page without login and User cannot view the logout button without login.
 **/
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img
              src="https://www.balfourbeatty.com/images/logos/logo.svg"
              className="h-8 mr-3"
              alt="BalfourBetty Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="flex flex-row gap-10">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {(isLogin || isLoggedIn) && (
              <div className="flex items-center justify-between dark:bg-color-white cursor-pointer">
           
                <div 
                onClick={handleLogout}
                className="dark:text-white"
                >Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
