import React, { useState } from "react";
import { loginUser } from "../api/user";

const UseActionState = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    setUser(null); // Reset user to null before new login
    setError(null);

    try {
      const response = await loginUser(username, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error || "Login failed");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {user && (
          <p className="text-green-600 text-center">
            Logged in: {user.email}
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default UseActionState;
