import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, LoginPage, ForgotPassword, Home } from "./components/index";

import { useAppContext } from "./AppContext";
function App() {
  const [isLogIn, setIsLogin] = useState(localStorage.getItem("isLoggedIn"));
  const { isLoggedIn } = useAppContext();
  useEffect(() => {
    setIsLogin(localStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);

  return (
    <div className="h-screen">
      <Navbar isLogIn={isLogIn} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/Home"
          element={isLoggedIn || isLogIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
