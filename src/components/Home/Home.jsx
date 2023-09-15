import React, {useState } from "react";

function Home() {
 
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLoggedIn"));

  return (
    <>
      {isLogin && (
        <section class="">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
            Welcome Home
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
