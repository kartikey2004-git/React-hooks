import React, { useActionState } from "react";
import { loginUser } from "../api/user";

const UseActionState = () => {
  const [user, submitAction, isPending] = useActionState(login, {
    data: null,
    error: null
  })

   async function login(prevState , formData){
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      console.log(response.data);

      return {data: response.data , error: null}
      
    } catch (error) {
      return {...prevState , error : error.error}
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={submitAction}
        className="p-8 rounded-2xl shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">UseActionState Login</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            name="username"
            type="text"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 px-4 font-semibold rounded-lg shadow-md text-white transition duration-300 ${
            isPending
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        {user?.data && (
          <p className="text-green-600 text-center">Logged in: {user.data.email}</p>
        )}
        {user?.error && <p className="text-red-600 text-center">{user.error}</p>}
      </form>
    </div>
  );
};

export default UseActionState;