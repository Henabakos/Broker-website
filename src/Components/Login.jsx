import React, { useState } from "react";
import { login, SignUp } from "../config/firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await SignUp(name, email, password);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-100 bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(#0000007e,#0000007e),url(Property-Listing-09.jpg)`,
      }}
    >
      <div className="bg-black bg-opacity-75 rounded-lg shadow-md p-6 sm:p-8 w-full max-w-sm">
        <h1 className="text-[28px] sm:text-[30px] font-bold mb-6 text-center text-orange-500">
          {signState}
        </h1>
        <form>
          {signState === "Sign In" ? null : (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-white mb-2 text-lg sm:text-xl"
              >
                Username
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="username"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 rounded-md border-none text-white focus:outline-none bg-[#333]"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-white text-lg sm:text-xl mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 rounded-md border-none text-white focus:outline-none bg-[#333]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-lg sm:text-xl mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 rounded-md border-none text-white focus:outline-none bg-[#333]"
            />
          </div>
          <button
            type="submit"
            onClick={user_auth}
            className="w-full py-2 px-3 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mb-4"
          >
            {signState}
          </button>
          {signState === "Sign In" ? (
            <h2 className="text-blue-300 text-[15px] sm:text-[17px]">
              New to Broker?{" "}
              <span
                className="text-white font-bold cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>
            </h2>
          ) : (
            <h2 className="text-blue-300 text-[15px] sm:text-[17px]">
              Already have an account?{" "}
              <span
                className="text-white font-bold cursor-pointer"
                onClick={() => setSignState("Sign In")}
              >
                Sign In Now
              </span>
            </h2>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
