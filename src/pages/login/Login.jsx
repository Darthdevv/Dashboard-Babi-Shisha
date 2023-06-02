import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className=" flex flex-col items-center justify-center box-border min-h-screen ">
      <h2 className=" text-[35px] mb-5">Welcome to Babi Shisha</h2>
      <label className="text-[16px]" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        name="Phone"
        id="phone"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        placeholder="+1 (123) 456-7890"
      />
      <label className="text-[16px]" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="Password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10"
        placeholder="Min. 8 characters"
      />
      <button className="w-[400px] text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2">
        Login
      </button>
    </div>
  );
}

export default Login;
